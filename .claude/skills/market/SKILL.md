# Skill: Market

Mesurer si le marché peut porter l'offre, et refuser d'acheter du trafic tant que la conversion du peu qu'on a n'est pas tenue. Déclenché en phase Find, ou avant de choisir un canal, quand personne n'a chiffré la demande. Source : StrategeMarketing (mesure PAM / TAM / SAM / SOM, CRO, offre, visibilité dans les réponses des IA).

## Objectif

Fin de session : **quatre chiffres de marché** (même ordre de grandeur), **le goulot CRO ou trafic nommé**, et **la décision** : on creuse cette niche, ou on en change. Fichier `Output/Market_[date].md`.

**Critères de succès :** les chiffres sont des ordres de grandeur sourcés, pas des rêves d'ARR. Une seule niche. La page ou l'offre est le prérequis avant la pub.

## Croyances

- **On ne lance pas un canal sur une offre indicible.** Le tutoriel de marketing vient après le deal et après une page qui convertit le trafic déjà là.
- **CRO avant plus de trafic.** Doubler la conversion du peu qu'on a bat l'achat de deux fois plus de visiteurs sur une page morte.
- **Le marché se mesure en entonnoir.** PAM (tout le problème dans le monde), TAM (le segment qu'on pourrait servir), SAM (celui qu'on peut atteindre), SOM (celui qu'on peut prendre à court terme). Sans SOM, le TAM est une vanity metric.
- **Une offre irrésistible est un prérequis, pas un module parmi d'autres.** Si elle manque, `offer` puis `direct`.
- **Être cité par les IA suit la même logique que le SEO.** Une page claire, spécifique, qui répond à l'intention, bat un site vague. On ne crée pas un chantier « GEO » à part tant que la page ne convertit pas.

## Process

### Phase 0 — Niche

Une phrase : qui a le problème, dans quel pays, avec quel budget. **Si la phrase contient « tout le monde » →** on rétrécit avant de compter.

### Phase 1 — Quatre nombres

BOS cherche des sources publiques (études, organismes, bases). Chaque nombre a une source ou la mention « estimation, hypothèse visible ».

- **PAM.** Taille du problème.
- **TAM.** Portion théoriquement achetable.
- **SAM.** Portion atteignable avec le canal qu'on est capable de tenir.
- **SOM.** Clients réalistes à 12 mois si l'exécution est correcte. Ce n'est pas un objectif affiché au client. C'est un filtre : si le SOM ne paie pas le coût de vie, on change de niche, on n'optimise pas la pub.

### Phase 2 — CRO ou trafic

- Il y a déjà des visiteurs ou des conversations, et peu d'achats → `page` ou `funnel`. On ne paie pas plus de trafic.
- Il n'y a personne → le marché peut être grand et le problème reste l'acquisition. Retour `traffic` après ce fichier.
- L'offre est floue → `offer` avant le canal.

### Phase 3 — Décision

Une ligne : « On reste sur [niche] parce que [SOM et accès]. » ou « On laisse [niche] parce que [le SOM ne tient pas]. »

Enchaîner sur `find` si on laisse, sur `offer` ou `traffic` si on reste.

## Output

```markdown
# Marché — [date]

- **Niche :**
- **PAM :** [chiffre, source]
- **TAM :**
- **SAM :**
- **SOM :**
- **Décision :** [on reste / on laisse]
- **Prochaine étape :** [offer / page / traffic / find]
```

| Fichier | Contenu |
|---------|---------|
| `Output/Market_[date].md` | Chiffres et décision |
| `Core/Business.md` | Niche retenue |
| `Core/Diagnosis.md` | Si la niche était le doute |

## Garde-fous

- **Ne JAMAIS présenter le TAM comme un revenu futur.** → Le SOM est le filtre.
- **Ne JAMAIS inventer une statistique.** → Source, ou « inconnu ».
- **Ne JAMAIS ouvrir un chantier GEO séparé.** → Une page spécifique d'abord (`page`).
- **REFUSE d'enchaîner sur de la pub si la page actuelle ne convertit pas le trafic déjà là.**
