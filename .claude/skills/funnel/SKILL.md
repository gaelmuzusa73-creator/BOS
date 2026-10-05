# Skill: Funnel

Optimiser le tunnel de conversion quand le trafic et l'offre sont déjà des hypothèses validées. Déclenché quand `diagnosis` identifie un problème de conversion en phase PMF — en 3e position (après trafic et offre) car c'est le cas le plus rare : assez de volume qualifié, offre structurée, mais la conversion casse.

Beaucoup d'entrepreneurs « optimisent le funnel » alors que le vrai problème est le volume ou l'offre. Ce skill **assume** : trafic suffisant pour apprendre, offre crédible — sinon **renvoyer** vers `traffic` ou `offer`. Ici : données d'abord, un levier à la fois, IA pour ~80% du travail (copy, structure, propositions de test).

## Objectif

À la fin de la session : carte du tunnel **complète**, métriques par étape, **comparaison aux benchmarks**, **plus gros drop-off identifié**, **recommandations priorisées** (levier #1), et **au moins une variante concrète** (copy réécrite, restructure page, plan de test) produite par BOS. Fichiers Core et Output à jour.

**Critères de succès :** décisions **chiffrées** ; continuité du message auditée ; une hypothèse de correction **à la fois** ; pas d'optimisation « au feeling ».

## Croyances

- **Le funnel est la dernière hypothèse.** Si trafic insuffisant ou offre non validée, le problème **n'est pas** le funnel — diagnostiquer autrement.
- **Data-driven, pas opinion-driven.** Chaque décision doit s'appuyer sur des chiffres (ou sur un plan explicite pour les obtenir).
- **Plus gros drop-off d'abord.** On perd le plus de monde à un endroit précis — c'est là le levier #1.
- **Prioriser la valeur perdue, pas seulement le pourcentage.** Un gros drop-off sans volume ou faible valeur peut peser moins qu'une friction plus basse dans le tunnel.
- **Un seul changement à la fois.** Sinon on ne sait pas ce qui a marché.
- **Des benchmarks standards existent.** Comparer **avant** de crier au désastre ou de se féliciter.
- **L'IA peut faire ~80% de l'optimisation** — réécriture, structure, suggestions A/B ; l'humain valide, publie, et respecte la discipline de mesure.

## Process

### Phase 1 — Mapper le tunnel complet

Pour **chaque étape**, nommer la source et la sortie :

**Source trafic** → **Landing / site** → **Intérêt** (scroll, clic, temps) → **Considération** (lead, panier, booking) → **Achat** → **Post-achat** (onboarding, usage, réachat, referral).

Adapter les libellés au modèle (SaaS, e-com, services, appels). Inclure **toutes** les branches (ex. email nurture, relances panier).

### Phase 2 — Collecter les données à chaque étape

Exemples de métriques (choisir ce qui colle au business) :

- Visiteurs uniques, sessions
- Clics CTA, taux de clic
- Leads / inscriptions / add-to-cart
- Checkout initié vs complété
- Achats, panier moyen
- Emails : envoi, ouverture, clic
- Appels : bookés, show rate, close rate

Si données manquantes → **première action** = instrumentation minimale (analytics, tableaux, exports) — pas « optimiser à l'aveugle ».

Pour chaque micro-conversion, consigner :

```text
Volume entrant → taux de passage → valeur unitaire → perte estimée
Qualité des données → hypothèse → propriétaire de la mesure
```

### Phase 3 — Comparer aux benchmarks standard

Utiliser des ordres de grandeur **indicatifs** (ajuster selon industrie et source) :

| Étape (indicatif) | Ordre de grandeur souvent cité |
|-------------------|--------------------------------|
| Landing → lead (B2B lead gen) | Variable ; viser amélioration vs baseline propre |
| Page produit → add to cart | ~2-5% visiteurs (e-com — très variable) |
| Checkout completion | Souvent 40-70% du checkout initié (à calibrer) |
| Email open (campagnes) | Très variable et biaisé par la protection de confidentialité ; utiliser surtout la baseline propre |
| Email click | Souvent ~2-5% du send (variable) |

**Règle :** la valeur absolue compte moins que **ton** historique ; les benchmarks servent à contextualiser (« on est sous le plausible » vs « le problème est en amont »).

### Phase 4 — Identifier le levier à plus forte valeur

Calculer les **pertes relatives** entre étapes : où perd-on le plus de gens en proportion ou en volume absolu qualifié ?

Prioriser **une** étape avec :

```text
Priorité = volume qualifié perdu × valeur unitaire × confiance / effort
```

Si une étape basse n'a pas assez de volume pour conclure, commencer plus haut dans le tunnel ou utiliser des tests qualitatifs. Documenter l'hypothèse (« friction checkout », « promesse landing ≠ offre », etc.) liée au chiffre.

### Phase 4b — Auditer le message avant de réécrire

Comparer source de trafic et page sur :

- audience et niveau de conscience ;
- problème et promesse ;
- mécanisme ;
- preuve dominante ;
- offre et CTA.

Une publicité froide peut devoir éduquer le prospect ; une audience déjà consciente attend plutôt comparaison, preuve, prix et conditions. Chaque asset porte **une** idée et une action principales.

Créer aussi un **Proof Ledger** : chaque affirmation → preuve disponible → contexte → emplacement. Ne pas compenser un manque de preuve par des superlatifs.

### Phase 5 — Proposer des améliorations (levier #1 d'abord)

Pour l'étape retenue :

- **Copy** — titres, bullets, garanties, objections.
- **Structure** — hiérarchie page, ordre des sections, nombre de champs formulaire.
- **Design / UX** — lisibilité mobile, CTA visibles, charge cognitive.
- **Confiance** — preuve, risque inversé, clarté du next step.

Grille de copy consolidée :

1. cible identifiable ;
2. problème ou désir précis ;
3. promesse compréhensible ;
4. mécanisme crédible ;
5. bénéfices concrets et observables ;
6. preuve proportionnée ;
7. objections ;
8. réduction du risque ;
9. CTA unique ;
10. cohérence avec la source de trafic.

BOS rédige **2-3 variantes** testables pour **un** changement principal (ex. headline seulement).

### Phase 6 — Implémenter avec l'IA (BOS)

- Réécriture des blocs prioritaires.
- Proposition de structure alternative (wireframe textuel).
- Si pertinent : plan de test A/B sur une variable — hypothèse, variante A/B, métrique de succès, durée minimale.

### Phase 7 — Mesurer et itérer

- **1 changement** (ou une famille cohérente : ex. uniquement la page panier).
- **Mesurer** sur une fenêtre définie (souvent ~1 semaine minimum si volume suffisant — sinon plus long ou abandon du test statistique au profit de volumes plus hauts).
- Réévaluer : garder, itérer, ou passer au 2e drop-off.

## Output

| Fichier | Contenu |
|--------|---------|
| `Output/Funnel_Audit_[date].md` | Carte tunnel + données + benchmarks + drop-offs + reco + plan de test |
| `Core/Actions.md` | Actions prioritaires (mesure, implémentation, suivi) |
| `Core/Business.md` | Section conversion / funnel si utile (état, KPIs, expériences en cours) |

## Garde-fous

- **Ne JAMAIS optimiser le funnel si le trafic est insuffisant pour conclure** — d'abord le volume (`traffic`).
- **Ne JAMAIS changer plusieurs choses à la fois** — un changement, une mesure.
- **Ne JAMAIS optimiser sans données** — « je pense que c'est X » sans chiffres = interdit ; obtenir le minimum de métriques ou le dire explicitement.
- **Ne JAMAIS ignorer le contexte** — ~10 visiteurs/semaine : pas besoin d'A/B test statistique ; besoin de trafic ou de tests qualitatifs.
- **Ne JAMAIS traiter le funnel en premier si l'offre ou le volume n'est pas validé** — ordre PMF : offre / trafic avant conversion fine.
- **Ne JAMAIS imposer un A/B test sans volume suffisant.** Utiliser entretiens, tests de compréhension, replays ou ventes manuelles.
- **Ne JAMAIS multiplier pages, upsells ou downsells avant que l'offre principale convertisse et satisfasse.**
- **Ne JAMAIS utiliser rareté, timestamps, témoignages ou preuves inventés.**
