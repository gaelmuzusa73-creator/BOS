#!/usr/bin/env bash
# Installe en global (tous les projets Cursor) :
# - le pack Taste (leonxlnx/taste-skill)
# - copy / outbound / email (méthodes YouTube, utilisables hors BOS)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CURSOR_SKILLS="${HOME}/.cursor/skills"
AGENTS_SKILLS="${HOME}/.agents/skills"

echo "→ Taste skill (13 skills)"
npx --yes skills add leonxlnx/taste-skill -g -a cursor --copy --skill '*' -y

mkdir -p "${CURSOR_SKILLS}" "${AGENTS_SKILLS}"

if [[ -d "${HOME}/.agents/skills" ]]; then
  for d in "${HOME}/.agents/skills"/*; do
    [[ -d "$d" && -f "$d/SKILL.md" ]] || continue
    name="$(basename "$d")"
    rm -rf "${CURSOR_SKILLS}/${name}"
    cp -R "$d" "${CURSOR_SKILLS}/${name}"
  done
fi

echo "→ copy / outbound / email"
for name in copy outbound email; do
  src="${ROOT}/skills/${name}"
  [[ -f "${src}/SKILL.md" ]] || { echo "missing ${src}"; exit 1; }
  for dest in "${CURSOR_SKILLS}" "${AGENTS_SKILLS}"; do
    mkdir -p "${dest}/${name}"
    cp "${src}/SKILL.md" "${dest}/${name}/SKILL.md"
  done
done

echo
echo "Installés dans ${CURSOR_SKILLS} :"
ls -1 "${CURSOR_SKILLS}"
echo
echo "Dans Cursor : Customize → Skills pour les voir."
echo "Pour les Cloud Agents : Settings → Agents → Sync Skills for Cloud Agents."
