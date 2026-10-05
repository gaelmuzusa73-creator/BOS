# Skill: Email

Faire travailler la liste qu'on possède déjà : inscrits, leads, clients. Déclenché quand des contacts existent et ne reçoivent rien d'utile, ou quand le suivi après une prise de contact est lent. Ce n'est pas l'email froid (`coldmail`).

## Objectif

Fin de session : **les 5 prochains emails sont écrits**, la règle de cadence est fixée, et le premier est prêt à partir. Fichier `Output/Email_[date].md`.

**Critères de succès :** chaque email a un seul but (acheter maintenant, ou rendre l'achat futur plus probable) ; désabonnement évident ; un CTA ; le lead nouveau a une règle de délai de contact.

## Croyances

- **L'email est un actif seulement s'il est utile.** Le retour souvent cité, 35 à 45 pour 1, vient des boîtes qu'on a envie d'ouvrir. Une liste qu'on arrose de promos se tait, et le silence abîme plus que les désabonnements.
- **Un email, un but.** Soit il vend. Soit il augmente la chance d'un achat plus tard (preuve, histoire, objection, usage). Jamais les deux à moitié.
- **Aligner l'envoi sur le job du fournisseur de messagerie.** Il doit livrer les messages que les gens veulent. Texte simple, peu de liens, expéditeur stable. Les hacks de délivrabilité sont un symptôme d'emails que personne ne veut.
- **Le désabonnement facile est une fonction, pas une perte.** Un inactif qui ne part pas compte comme un lecteur mort et plombe les suivants.
- **L'aperçu est un second objet.** Si on ne l'écrit pas, les 150 premiers caractères du corps décident à notre place.
- **La vitesse bat la perfection sur un lead nouveau.** Un contact qui vient de lever la main se refroidit en heures. Le premier message part le jour même, même court.
- **Segmenter avant de « mieux écrire ».** Le même texte à toute la base est le premier gaspillage. Au minimum : nouveau lead, prospect en conversation, client.
- **Le témoignage qui vend commence par la douleur.** Pas par le prénom et le logo.
- **Donner la méthode, vendre la mise en œuvre.** Un email éducatif qui ne cache rien rend le prochain email d'offre crédible.

## Process

### Phase 0 — Pré-check

- Taille de liste, d'où viennent les contacts, date du dernier envoi, outil.
- **Liste à zéro →** ce skill attend. Le sujet est l'acquisition (`traffic` ou `coldmail`). On peut écrire le premier email d'accueil pour le jour où le premier inscrit arrive, pas une « stratégie newsletter ».
- **Offre indicible →** `offer` avant une séquence de vente. Un email de valeur pure peut quand même partir si la liste attend.

### Phase 1 — Découper la liste

Trois tas suffisent au début :

1. **Nouveau** — inscrit ou lead de moins de 7 jours. Priorité : réponse rapide.
2. **Prospect** — connaît l'offre, n'a pas acheté.
3. **Client** — a payé. Usage, preuve, suite logique. Pas la même promo que les inconnus.

S'il existe un quatrième tas évident (essai en cours, panier, appel manqué), le nommer. Pas plus.

### Phase 2 — Règle de contact

Écrire la règle en une phrase, par tas.

- Nouveau lead : message le jour même. But = prochaine étape (réponse, appel, essai), pas un roman.
- Prospect : cadence fixe, assez pour rester utile, pas assez pour être le bruit. Par défaut **un email par semaine** tant qu'on n'a pas de chiffre qui justifie plus.
- Client : un rythme plus lent, lié à un résultat (usage, renouvellement, cas).

Dire explicitement : le lien de désabonnement est visible. On ne cache pas le départ.

### Phase 3 — Écrire 5 emails

BOS les écrit dans la session. Mix par défaut si la liste est jeune :

1. Accueil / pourquoi cette liste existe, une action.
2. Le problème dans leurs mots, sans pitch.
3. Mécanisme : comment ça se résout, méthode donnée.
4. Preuve : un cas, hook = la douleur de départ.
5. Offre : un CTA, risque inversé si la garantie est vraie.

Chaque email :

- Objet court.
- Aperçu écrit (pas le début du corps répété mot pour mot).
- Une idée.
- Un lien ou une demande, pas cinq.
- Signature humaine, même expéditeur que d'habitude.

Texte simple. Pas de maquette lourde pour « faire pro ». Le pro, ici, c'est d'arriver et d'être lu.

### Phase 4 — Premier envoi

Le premier email part dans la session si l'outil est accessible, sinon le texte est collé dans un brouillon et l'entrepreneur n'a plus qu'à appuyer.

Chiffres à noter ensuite, pas avant : délivrés, réponses ou clics, désabonnements, ventes. On ne juge pas un email à l'ouverture seule.

Dire : « Si t'as peur d'envoyer à toute la liste, on commence par 20 personnes. Dis-moi ce qui coince. »

### Phase 5 — Fichiers

`Output/Email_[date].md`, section Marketing de `Core/Business.md` (liste, cadence, outil), `Core/Actions.md`.

## Output

```markdown
# Email liste — [date]

- **Liste :** [taille, source, dernier envoi]
- **Tas prioritaires :** [nouveau / prospect / client]
- **Cadence :** [règle]
- **Délai nouveau lead :** [le jour même / autre]

## Email 1
- Objet :
- Aperçu :
- Corps :
- CTA :

## Emails 2 à 5
[même format]
```

| Fichier | Contenu |
|---------|---------|
| `Output/Email_[date].md` | Règles + 5 emails |
| `Core/Business.md` | Cadence et outil |
| `Core/Actions.md` | Envoi du #1 |

## Garde-fous

- **Ne JAMAIS lancer une newsletter vide pour « être présent ».** → Chaque envoi a un but.
- **Ne JAMAIS cacher le désabonnement.** → Lien visible.
- **Ne JAMAIS envoyer le même tunnel de vente aux clients et aux inconnus.** → Au moins trois tas.
- **Ne JAMAIS traiter l'email froid ici.** Les inconnus non inscrits passent par `coldmail`.
- **Ne JAMAIS optimiser l'objet pendant que les leads nouveaux attendent depuis des jours.** → Le message du jour part d'abord.
- **REFUSE d'écrire 30 jours de contenu d'avance.** Cinq emails, on envoie, on lit les réponses, on ajuste.
