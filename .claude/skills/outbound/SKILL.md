---
name: outbound
description: Get conversations with strangers who can pay via LinkedIn or cold email. Use for B2B/service prospecting, first clients, or when there is no audience yet.
---
# Skill: Outbound

Obtenir des conversations avec des inconnus qui peuvent payer — cold email et LinkedIn. Déclenché quand `diagnosis` identifie un problème de volume en B2B / service, ou quand `traffic` retient le canal outbound.

Ce n'est pas du spam. C'est une machine à conversations : liste précise, offre qui donne envie de répondre, texte court, suivi, vitesse de réponse.

## Objectif

À la fin de la session : **ICP figé**, **liste de 20–50 cibles** (ou le plan exact pour la construire), **séquence de 3 messages écrite**, **premier message prêt à coller**. Fichiers Core + Output à jour.

**Critères de succès :** un inconnu peut répondre « oui / non » en 10 secondes ; l'entrepreneur a UNE personne à qui envoyer MAINTENANT ; on ne « prépare pas le système » à la place d'envoyer.

## Croyances

- **Les 3 piliers, dans cet ordre : liste, offre, copy.** Une infra parfaite avec une mauvaise liste = zéro. Une belle séquence envoyée aux mauvais = zéro. Le copy est le 3e pilier, pas le premier.
- **Outbound bat le contenu quand tu n'as ni audience ni 90 jours.** Le contenu construit un actif. L'outbound construit des conversations cette semaine. Pour un premier client, on sort.
- **La réponse est la métrique. Pas l'ouverture.** Une ouverture à 70 % et 0 réponse = message inutile. On optimise le reply rate, puis le booked call, puis le close.
- **Court, personnel, une question.** 50–90 mots. Un détail vrai sur EUX. Une question oui/non. Pas de pièce jointe, pas de calendrier au premier message, pas de roman.
- **Le suivi fait plus de ventes que le premier envoi.** La plupart des réponses arrivent au message 2 ou 3. Arrêter après un seul envoi, c'est jeter la liste.
- **Vitesse de réponse > volume de relance.** Un « oui » sans réponse en 5 minutes refroidit. Traiter les réponses avant d'envoyer la vague suivante.
- **Offre froide ≠ offre chaude.** Au froid, on ne vend pas le package à 2 500 €. On vend une raison de répondre : audit, constat, question intelligente, « reverse lead magnet » (tu leur donnes le résultat avant qu'ils demandent).
- **Mieux vaut 40 comptes parfaits que 4 000 emails pourris.** Une liste sale brûle le domaine et le moral. Qualifier > scaler.
- **Envoyer imparfait aujourd'hui bat le setup parfait lundi.** Le premier client ne vient pas d'Instant.ly. Il vient d'un message envoyé.

## Process

### Phase 0 — Pré-check

Lire Core/ en silence.

**If** pas d'offre / pas d'ICP → `offer` d'abord (3 Descriptions + qui paie). On peut quand même écrire un message de recherche (« c'est un vrai problème chez vous ? ») si l'hypothèse est assez claire.

**If** les messages sont déjà écrits mais pas envoyés → ce n'est plus un problème outbound. C'est `mindset` (peur) ou Cadre des 6 Causes. Ne pas réécrire le copy pour éviter d'envoyer.

**If** canal déjà choisi = contenu / ads / SEO et que ça marche → ne pas ouvrir outbound « en plus ». Un canal, 90 jours.

**If** B2C de masse sans liste d'entreprises → outbound email est souvent le mauvais outil. LinkedIn / DMs créateurs, ou `traffic`.

Dis : *« On va te sortir un premier message envoyable aujourd'hui. Pas un système à 10 000 emails/jour. D'abord 20 personnes précises. »*

### Phase 1 — ICP et offre froide

Figer en 8 lignes :

1. **Qui** (titre + taille + géographie + un symptôme visible)
2. **Qui on exclut** (trop petit, trop grand, mauvais secteur)
3. **Preuve qu'ils ont le problème** (outil public, post, job, avis, site)
4. **Offre froide** — une raison de répondre, pas le contrat :
   - constat personnalisé (« j'ai vu X sur votre site »)
   - question de qualification
   - mini-audit / 3 captures
   - « reverse lead magnet » : un livrable utile avant qu'ils demandent
5. **Ask** : une question, pas « vous êtes dispo mardi 14h »

**If** l'offre froide = « je vous présente mon agence » → refuser. Recadrer sur LEUR problème.

### Phase 2 — Liste (pilier 1)

Construire **20–50 noms** avant toute infra.

Sources légitimes, dans cet ordre :
1. Réseau et « friend-of-friend » (même 3 noms)
2. LinkedIn Sales Nav / recherche manuelle (titre + geo + mot-clé)
3. Annuaires professionnels, podcasts, listes d'agences, événements
4. Bases B2B payantes (Apollo, etc.) **filtrées** — pas un dump

Pour chaque ligne : Nom, entreprise, titre, pourquoi EUX (1 détail), canal (LinkedIn / email public), URL.

**Nettoyage minimum :**
- Email professionnel vérifié ou LinkedIn en premier
- Pas de role générique seul (`info@`, `contact@`) si on peut avoir le fondateur
- Une personne décisionnaire, pas 4 emails dans la même boîte

**If** l'entrepreneur n'a pas d'outil → BOS dresse les 15 premiers noms à la main dans la session (recherche web). C'est le livrable.

Ne pas passer à 500 lignes tant que 20 messages n'ont pas été envoyés.

### Phase 3 — Canal et infra (juste assez)

**Débutant / premier client :** LinkedIn + email public trouvé proprement. Un compte réel, un nom réel. Zéro ferme de domaines.

**Si volume email justifié** (liste B2B propre, 50+ déjà envoyés à la main, reply rate mesuré) :
- Domaine dédié à l'outreach (pas le domaine principal du site)
- SPF / DKIM / DMARC configurés (auth standard, pas un « hack »)
- Volume bas au début, warmup progressif
- Texte brut, 0–1 lien, pas d'image
- Lien de désinscription et identité claire (légal)

**REFUSE** de concevoir : fermes de boîtes, scraping massif, contournement de filtres, usurpation, listes achetées douteuses, volumes 10k/jour pour un solo.

Dis : *« Ton avantage c'est pas d'envoyer 10 000 emails. C'est que je t'écris des messages que 20 bonnes personnes ont envie d'ouvrir, et que toi tu les envoies aujourd'hui. Les autres bricolent des usines à spam. »*

### Phase 4 — Copy de la séquence (BOS écrit)

Activer les règles de `copy` (voix du client, PAS, une question). Triple frappe :

**Message 1 — Constat + question (J0)**
- 50–90 mots
- 1 détail vrai (leur site, un client, un post, un outil visible)
- Douleur dans LEURS mots
- 1 question oui/non
- Pas de lien, pas de pièce jointe, pas de « je m'appelle X et je suis passionné »

**Message 2 — Preuve ou angle 2 (J+3 à J+5)**
- Nouveau détail ou mini-constat
- Une preuve (même petite) ou une hypothèse plus précise
- Même question, reformulée

**Message 3 — Porte de sortie (J+7 à J+10)**
- Court. « Je referme le dossier — c'est un non, ou le timing est juste mauvais ? »
- Leur laisse la dignité de dire non. Les non sont de l'or.

Variantes d'objet (email) : 3 objets A/B, 3–6 mots, pas de « opportunité », « synergie », « 15 min ».

**If** LinkedIn : note de connexion ≤ 300 caractères = Message 1 encore plus court. Le vrai texte part après acceptation.

Montrer la séquence. Une passe de correction de ton. Puis : *« Premier nom. On copie-colle. »*

### Phase 5 — Envoi et système de réponses

Dans cette session, réduire à **UNE action** :

1. Envoyer le Message 1 à **la première personne de la liste** (script exact, déjà écrit).
2. Bloquer 15 min plus tard pour les 4 suivantes.

Tableau de suivi (BOS le crée dans Output) :

| Nom | Canal | Envoi 1 | Relance 2 | Relance 3 | Réponse | Next |
|---|---|---|---|---|---|---|

Règles de réponse (BOS prépare 4 scripts) :
- **Oui / curieux** → 3 phrases + un créneau OU une question de qualif. Pas un deck.
- **Plus tard** → « Je reviens le [date]. C'est quoi le trigger de votre côté ? »
- **Pas intéressé** → « Merci — c'est le reporting, le timing, ou le sujet ? » (1 question d'apprentissage)
- **Silence après 3** → on archive. On n'écrit pas un 6e message passif-agressif.

**Speed-to-lead :** un oui se traite le jour même. Si l'entrepreneur ne peut pas → BOS prépare la réponse à copier.

### Phase 6 — Lire les chiffres avant de scaler

Après 20–50 envois (pas avant) :

| Métrique | Signal |
|---|---|
| Reply rate < 2 % | Liste ou offre froide, pas le wording d'abord |
| Reply 2–8 %, 0 call | Ask trop vague ou trop tôt (calendrier) |
| Réponses « c'est quoi ? » | ICP ou promesse floue |
| Réponses « on a déjà » | Invalider l'alternative (PAISA) dans le message 2 |
| 1+ conversation | **On itère le copy avec leurs mots** — `offer` / `copy` |

**If** 50 envois, 0 réponse utile → changer UNE chose : ICP, ou offre froide, ou canal. Pas les trois.

Ne pas « scaler la machine » tant que le reply rate n'est pas lisible.

### Phase 7 — Sauvegarder et enchaîner

1. `Output/Outbound_[date].md` — ICP, offre froide, liste, séquence, scripts de réponse, premier envoi.
2. `Core/Business.md` — Marketing : canal outbound, ICP, métriques.
3. `Core/Actions.md` — **envoyer le message #1 à [Nom]** en gras.
4. `Core/Journal.md` — une ligne.

Enchaîner : *« Premier message. [Nom], [entreprise]. Je te le remets ici. Tu l'envoies, tu me colles la réponse. Si ça bloque, dis-le — c'est normal. »*

## Output

Livrable dans `Output/Outbound_[date].md`. Mettre à jour `Core/Business.md` (canal, ICP, métriques) et `Core/Actions.md` (premier envoi nommé).

Template du livrable :

```markdown
# Outbound — [Date]

ICP
- Qui : [...]
- Exclus : [...]
- Symptôme visible : [...]

Offre froide
[raison de répondre, pas le contrat]

Liste (20+)
| Nom | Entreprise | Détail | Canal | URL |

Séquence
M1 (J0) — Objet : ...
[texte]
M2 (J+4)
...
M3 (J+8)
...

Scripts de réponse
- Oui : ...
- Plus tard : ...
- Non : ...

Premier envoi
- Cible : [Nom]
- Canal : [LinkedIn / email]
- Statut : à envoyer maintenant
```

| Fichier | Contenu |
|---|---|
| `Output/Outbound_[date].md` | ICP, liste, séquence, scripts |
| `Core/Business.md` | Canal + ICP + métriques |
| `Core/Actions.md` | Premier envoi nommé |

## Garde-fous

- **Ne JAMAIS construire l'usine avant d'avoir envoyé 20 messages à la main.** Alternative : 20 noms + 1 séquence + envoi #1 aujourd'hui.
- **Ne JAMAIS vendre le package complet au premier message.** Alternative : offre froide + une question.
- **Ne JAMAIS scaler une liste sale ou un reply rate inconnu.** Alternative : qualifier 20 comptes, mesurer, puis élargir.
- **Ne JAMAIS concevoir de ferme de domaines, scraping abusif, ou contournement d'anti-spam.** Alternative : un domaine propre, une identité réelle, un volume honnête.
- **Ne JAMAIS réécrire le copy pour éviter d'envoyer.** Alternative : `mindset` + le plus petit envoi.
- **Ne JAMAIS ouvrir outbound en parallèle d'un autre canal déjà choisi pour 90 jours** — sauf si diagnosis dit que le canal actuel est mort.
- **REFUSE les séquences de 8 relances agressives.** 3 messages + une porte de sortie.
