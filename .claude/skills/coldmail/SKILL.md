# Skill: Coldmail

Mettre en place l'email froid comme **seul** canal d'acquisition : des inconnus qualifiés reçoivent une offre pertinente et répondent. Déclenché quand `traffic` choisit l'outbound email, ou quand `diagnosis` voit un marché B2B listable et pas de volume.

L'email froid n'est pas l'email à sa liste. Celui-là, c'est `email`.

## Objectif

Fin de session : le pilier faible est nommé, **une séquence de 3 emails** est écrite pour **un** segment, et la première action infra ou liste est faite ou réduite à un pas unique. Fichier `Output/Coldmail_[date].md`.

**Critères de succès :** les 3 piliers sont explicitement notés fort / faible ; le premier email tient en moins de 120 mots ; la demande est une réponse, pas un tunnel de liens ; aucune promesse de volume tant que l'infra n'est pas warmup.

## Croyances

- **Trois piliers, un seul coupable.** Infra technique, liste, offre + copy. Si ça ne marche pas, on ne « teste un objet de plus ». On revient au pilier le plus faible.
- **L'infra est une recette. Le copy ne l'est pas.** SPF, DKIM, DMARC, domaines dédiés, warmup, outil d'envoi : on suit la recette. L'offre et les mots demandent un jugement. C'est là que BOS passe le temps.
- **La pertinence protège le domaine.** Un email hors sujet se fait signaler. Assez de signalements, et plus rien n'arrive en boîte. Mieux vaut 50 bonnes personnes que 5 000 mauvaises.
- **Le triple tap est l'ordre de lecture, pas un slogan.** D'abord l'aperçu donne une raison d'ouvrir. Ensuite le corps tient une idée. Ensuite une seule demande de réponse. Un aperçu alarmiste suivi d'une vente se fait signaler.
- **Le premier email ne déverse pas.** Email 1 court. Email 2 relance dans le même fil. Email 3 apporte la preuve. L'inverse fatigue et finit en spam.
- **On monte le volume après les réponses, pas avant.** L'équation se calcule : envois → réponses positives → rendez-vous. Sans ces trois chiffres, « scaler » est une vanity metric.
- **Le canal est bon marché, pas gratuit en attention.** Les données de contact coûtent peu. Le domaine, lui, se brûle en une semaine de raccourcis.
- **Pas de raccourci infra pour économiser.** Mauvais outil ou DNS sauté = tout le reste est invisible.

## Process

### Phase 0 — Pré-check

Lire `Core/Business.md` et `Core/Diagnosis.md`.

**Si l'offre n'est pas dicible en une phrase →** `offer` d'abord. Un email froid avec un deal flou accélère les signalements.

**Si le marché n'est pas listable** (pas de métier, pas de zone, pas de signal) **→** ce n'est pas le canal. Retour `traffic`, recommander contenu ou un autre outbound.

**Si un autre canal est déjà en test depuis moins de 90 jours →** ne pas ouvrir celui-ci en parallèle. Le dire.

### Phase 1 — Noter les 3 piliers

Demander seulement ce que BOS ne peut pas voir :

- Des domaines d'envoi dédiés existent-ils, séparés du domaine principal ?
- SPF, DKIM, DMARC sont-ils en place, et les boîtes sont-elles en warmup ?
- Une liste existe-t-elle, et comment a-t-elle été qualifiée ?

Puis noter :

| Pilier | État | Preuve |
|--------|------|--------|
| Infra | fort / faible / absent | |
| Liste | fort / faible / absent | |
| Offre + copy | fort / faible / absent | |

**Le travail de la session = le pilier le plus faible.** Les deux autres attendent.

### Phase 2 — Infra (si c'est le pilier faible)

BOS écrit la recette, l'entrepreneur clique. Pas un cours DNS.

Checklist minimale, dans l'ordre :

1. Ne jamais envoyer le froid depuis le domaine de la marque.
2. Acheter 2 ou 3 domaines proches, pas trompeurs.
3. Créer peu de boîtes par domaine.
4. Publier SPF, DKIM, DMARC avant le premier envoi.
5. Brancher un outil d'envoi qui warmup et qui plafonne.
6. Warmup réel avant la campagne. Pas d'envoi « pour voir » le jour même.

**Sortie :** une checklist cochable avec l'outil choisi et le premier clic à faire aujourd'hui. Si l'entrepreneur bloque sur l'écran, rester sur ce clic. Ne pas passer au copy pour se rassurer.

### Phase 3 — Liste (si c'est le pilier faible)

Définir l'ICP en filtres, pas en adjectifs.

- Métier, taille, zone, outil déjà utilisé ou signal observable.
- Qui **ne pas** contacter (mauvais budget, mauvais pays, rôle qui ne décide pas).
- Source : base B2B, scraping ciblé, ou signal (recrutement, levée, techno). Une source.
- Vérification des emails avant envoi. Une adresse invalide coûte plus cher qu'elle ne rapporte.

BOS écrit les filtres et un exemple de 10 lignes (nom, rôle, société, pourquoi cette personne). L'entrepreneur exporte ou valide la source. On ne lance pas 1 000 lignes le premier jour.

### Phase 4 — Offre et copy (si c'est le pilier faible, ou une fois les deux autres tenus)

Appeler la discipline de `copy` pour le brief. Puis écrire **trois** emails.

**Email 1 — triple tap**

- Aperçu : une raison vraie d'ouvrir, liée à leur situation. Pas d'alerte fausse.
- Corps : observation spécifique, une idée, moins de 120 mots.
- Demande : une réponse simple (oui / non, ou un créneau). Pas trois liens.

**Email 2 — relance, même fil.** Une phrase qui rappelle la question. Pas un nouveau pitch.

**Email 3 — la preuve.** Cas, chiffre, ou démo courte. Toujours une seule demande.

Variante d'objet : deux aperçus maximum pour le premier test. On ne change qu'une chose.

Interdit dans le corps : pièces jointes, images, mots de promo criards, faux « Re: », fausse urgence.

### Phase 5 — Équation et premier envoi

Poser les chiffres de départ, même à blanc :

- Envois / jour (bas tant que le warmup n'est pas fini)
- Réponses positives visées
- Rendez-vous visés

La première action humaine est **une** : soit le DNS, soit l'export de 50 contacts vérifiés, soit l'envoi de la séquence à un lot test. BOS choisit celle qui débloque le pilier faible.

Dire : « Si t'hésites à appuyer sur envoyer, dis-le. On réduit le lot, on ne reporte pas le canal. »

### Phase 6 — Fichiers

`Output/Coldmail_[date].md`, `Core/Business.md` section Marketing (canal = email froid, 90 jours), `Core/Actions.md`, ligne dans `Core/Journal.md`.

## Output

```markdown
# Email froid — [date]

- **Segment :** [ICP en une phrase]
- **Pilier travaillé :** [infra / liste / offre]
- **Les 3 notes :** infra [ ], liste [ ], copy [ ]

## Séquence

### Email 1
- Aperçu :
- Corps :
- Demande :

### Email 2
[relance]

### Email 3
[preuve]

## Premier pas
[une action, une cible]
```

| Fichier | Contenu |
|---------|---------|
| `Output/Coldmail_[date].md` | Piliers, séquence, équation |
| `Core/Business.md` | Canal actif |
| `Core/Actions.md` | Le pas infra, liste ou envoi |

## Garde-fous

- **Ne JAMAIS envoyer depuis le domaine principal.** → Domaines dédiés, ou on n'envoie pas.
- **Ne JAMAIS acheter une liste douteuse pour « aller plus vite ».** → Filtres, vérification, petit lot.
- **Ne JAMAIS promettre un volume de rendez-vous.** → L'équation se remplit avec les vrais retours.
- **Ne JAMAIS empiler email froid et deux autres canaux.** → Un canal, 90 jours.
- **Ne JAMAIS confondre avec l'email de liste.** Les inscrits passent par `email`.
- **Ne JAMAIS poser un faux « Re: » ou une fausse alerte.** → Aperçu vrai, même s'il ouvre moins.
- **REFUSE d'écrire la séquence si l'offre tient en « je fais du digital ».** → `offer` d'abord.
