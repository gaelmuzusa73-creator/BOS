# Skills portables (hors BOS)

Versions utilisables dans **n’importe quel projet Cursor**, pas seulement ce repo.

| Skill | Quand |
|---|---|
| `copy` | Mots qui font cliquer / répondre / acheter |
| `outbound` | Premiers clients B2B — LinkedIn + cold email |
| `email` | Liste chaude qui dort |

Le pack **Taste** (UI anti-générique) ne vit pas ici : il s’installe depuis GitHub.

## Installer en global (une fois, sur ta machine)

```bash
bash scripts/install-global-skills.sh
```

Ça pose les fichiers dans `~/.cursor/skills/` — tous tes projets les voient.

Puis dans Cursor : **Settings → Agents → Sync Skills for Cloud Agents** si tu veux les mêmes skills dans les agents cloud.
