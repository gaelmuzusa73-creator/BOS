import { createRequire } from 'node:module';
const require = createRequire('/tmp/film-deps/package.json');
const puppeteer = require('puppeteer-core');
import { spawn } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { writeFileSync } from 'node:fs';

const mode = process.argv[2] || 'wide';
const out = process.argv[3];
const sample = process.argv[4];

const formats = {
  wide: { w: 1920, h: 1080, tall: false, frames: 2400, scale: 1 },
  tall: { w: 1080, h: 1920, tall: true, frames: 2400, scale: 1 },
  button: { w: 1280, h: 360, tall: false, frames: 90, scale: 1 },
  master: { w: 1920, h: 1080, tall: false, frames: 2400, scale: 2 }
};

const spec = formats[mode];
if (!spec || !out) {
  console.error('usage: render.mjs wide|tall|button|master outfile [frame]');
  process.exit(1);
}

const browser = await puppeteer.launch({
  executablePath: '/usr/local/bin/google-chrome',
  headless: true,
  args: ['--no-sandbox', '--disable-gpu', '--hide-scrollbars', '--font-render-hinting=none']
});
const page = await browser.newPage();
await page.setViewport({ width: spec.w, height: spec.h, deviceScaleFactor: spec.scale || 1 });
const url = pathToFileURL('/workspace/Output/film-off-duty/film.html').href;
await page.goto(url, { waitUntil: 'load' });
await page.evaluate((tall) => {
  document.body.classList.toggle('tall', tall);
}, spec.tall);
await page.evaluateHandle(() => document.fonts.ready);

async function shot(frame, type) {
  await page.evaluate((f, m) => {
    if (m === 'button') window.renderButton(f);
    else window.renderFrame(f);
  }, frame, mode);
  return page.screenshot({
    type,
    quality: type === 'jpeg' ? 90 : undefined,
    omitBackground: mode === 'button'
  });
}

if (sample) {
  const frame = Number(sample);
  const buf = await shot(frame, 'png');
  writeFileSync(out, buf);
  await browser.close();
  process.exit(0);
}

const args = mode === 'button'
  ? ['-y', '-f', 'image2pipe', '-vcodec', 'png', '-framerate', '30', '-i', '-', '-c:v', 'libvpx-vp9', '-pix_fmt', 'yuva420p', '-auto-alt-ref', '0', '-b:v', '1M', '-an', out]
  : ['-y', '-f', 'image2pipe', '-vcodec', 'mjpeg', '-framerate', '30', '-i', '-', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '16', '-movflags', '+faststart', '-an', out];

const ff = spawn('ffmpeg', args, { stdio: ['pipe', 'inherit', 'inherit'] });
const type = mode === 'button' ? 'png' : 'jpeg';
for (let f = 0; f < spec.frames; f++) {
  const buf = await shot(f, type);
  if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
  if (f % 300 === 0) console.error(mode, f);
}
ff.stdin.end();
await new Promise((resolve, reject) => {
  ff.on('close', (code) => code === 0 ? resolve() : reject(new Error('ffmpeg ' + code)));
});
await browser.close();
console.error('done', out);
