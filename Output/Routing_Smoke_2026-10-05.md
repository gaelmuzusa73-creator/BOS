# Smoke test routing — 2026-10-05

Quatre cas. Le skill attendu est celui que `diagnosis` doit ouvrir en premier.

| Cas | Signaux | Skill attendu | Pourquoi |
|---|---|---|---|
| A. Premier client B2B, 0 conversation | Service, ICP nommé, pas d'audience | `outbound` | Q1 volume + B2B/service |
| B. Trafic + offre OK, landing molle | Visiteurs, offre claire, fold flou | `copy` puis `funnel` | Q3 trou = mots / test 5 secondes |
| C. 800 emails, 0 envoi depuis 4 mois | Liste chaude qui dort | `email` | Q3 liste chaude |
| D. Messages déjà écrits, 0 envoyé | Copy prêt, évitement | `mindset` | Phase 0 — plus un problème de texte |

Canal ads retenu dans `traffic` : 5 statiques/jour, 50 hooks 80/20, `copy` rédige.

Vérifié dans le repo : les trois skills existent, le routing `CLAUDE.md` + `diagnosis` les cite, `traffic` a le canal outbound, `funnel` a le test 5 secondes.
