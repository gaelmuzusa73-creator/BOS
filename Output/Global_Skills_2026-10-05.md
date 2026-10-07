# Skills globaux — 2026-10-05

Demandé : installer Taste + tous les skills déjà envoyés, en global, hors BOS.

## Ce qui a été envoyé (toutes conversations)

- Chaînes / vidéos YouTube → skills `copy`, `outbound`, `email`
- `npx skills add leonxlnx/taste-skill` → 13 skills UI

Les autres conversations (onboarding, idées US, SaaS B2C) n’envoyaient pas d’autres packages de skills.

## Installé maintenant

**Taste (13)** dans `~/.cursor/skills/` et `~/.agents/skills/` :

brandkit, design-taste-frontend, design-taste-frontend-v1, full-output-enforcement, gpt-taste, high-end-visual-design, image-to-code, imagegen-frontend-mobile, imagegen-frontend-web, industrial-brutalist-ui, minimalist-ui, redesign-existing-projects, stitch-design-taste

**YouTube / BOS portables (3)** : copy, outbound, email — avec note « Hors BOS » (pas besoin des fichiers Core/).

Total : **16** skills dans `~/.cursor/skills/`.

## Sur ta machine (pour que ça suive vraiment)

Cette VM cloud n’est pas ton Mac. Une fois, en local, dans le repo BOS :

```bash
bash scripts/install-global-skills.sh
```

Ensuite : **Settings → Agents → Sync Skills for Cloud Agents**.
