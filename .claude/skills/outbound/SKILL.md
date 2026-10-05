# Skill: Outbound

Mettre en place et exécuter une machine de prospection sortante directe (Cold Email, LinkedIn DM, prospection multicanale B2B). Déclenché quand l'entrepreneur a besoin de clients rapidement, n'a pas de budget publicitaire, ou vend des offres high-ticket / B2B nécessitant une approche directe.

L'acquisition sortante (Outbound) est le canal le plus prédictible pour générer du cash rapidement sans dépendre du bon vouloir des algorithmes sociaux. Ce skill combine l'infrastructure technique moderne (délivrabilité 2026, warm-up, domaines dédiés) avec une méthode de ciblage chirurgicale et des messages ultra-personnalisés à faible friction.

## Objectif

À la fin de la session : **(1)** la liste des cibles idéales et le critère de filtrage sont définis, **(2)** la stack technique et les règles de délivrabilité sont configurées ou auditées, **(3)** la séquence de prospection complète (premier message + 2 relances) est rédigée mot à mot par BOS, **(4)** les premiers messages sont prêts à être envoyés immédiatement.

**Critères de succès :** une séquence actionnable rédigée sous les yeux de l'entrepreneur + un plan technique anti-spam + au moins 1 message envoyé ou prêt à partir dans l'heure.

## Croyances

- **L'Outbound est le moyen le plus rapide d'obtenir le premier euro.** Pas besoin de 6 mois de SEO, d'attendre 1 000 followers ou de brûler du cash en ads. Une offre solide + 50 prospects qualifiés = premiers rendez-vous sous 7 jours.
- **Le spam est mort, vive la pertinence chirurgicale.** Envoyer 10 000 emails génériques nuit à la réputation de domaine et ne convertit rien. 100 messages ultra-ciblés et pertinents battent 10 000 blasts génériques.
- **La délivrabilité est la condition sine qua non.** 17% des emails B2B n'atteignent jamais la boîte de réception à cause de mauvaises configurations techniques. Ne JAMAIS prospecter depuis son domaine principal. Domaines secondaires + SPF, DKIM, DMARC + warm-up progressif sont obligatoires.
- **Ne vends pas ton produit au premier contact : vends une micro-conversation.** L'objectif d'un cold email ou DM n'est pas de signer un contrat à 3 000€, mais d'obtenir une réponse d'une ligne ou l'accord pour regarder une vidéo de 2 minutes (Loom / audit rapide).
- **Le volume compense la chance, mais le ciblage multiplie le volume.** Contacter 10 personnes ne prouve rien. Il faut un volume régulier de 20 à 50 nouveaux contacts ciblés par jour pour alimenter un pipeline commercial consistant.
- **La relance génère 70% des réponses.** La majorité des prospects intéressés ne répondent pas au premier email par manque de temps. Relancer poliment avec de la valeur ajoutée (pas juste « avez-vous vu mon message ? ») double les résultats.

## Process

### Phase 1 — Définition de la Cible (ICP) & Angle d'Approche

Avant de rédiger, clarifier les 4 critères du prospect idéal :

1. **L'avatar précis :** Secteur d'activité, taille d'entreprise (CA ou effectif), poste exact du décideur (ex : Fondateur, CEO, Directeur Marketing).
2. **Le déclencheur d'achat (Trigger Event) :**
   - Recrutement récent sur un poste clé
   - Levée de fonds ou croissance annoncée
   - Refonte de site / nouveau produit lancé
   - Problème visible et constatable de l'extérieur (ex: site non optimisé mobile, pas de suivi email, absence de tracking analytics, avis négatifs récents sur une friction précise).
3. **L'offre « Trojan Horse » (Cheval de Troie) :**
   - Ne pas proposer un audit payant ou un appel commercial lourd.
   - Proposer une ressource à valeur immédiate et gratuite : un audit vidéo personnalisé de 2 min, un benchmark concurrentiel, ou un modèle prêt à l'emploi.

---

### Phase 2 — Setup Technique & Hygiène de Délivrabilité (BOS guide pas à pas)

Règles de sécurité absolue avant tout envoi :

1. **Isolation des domaines :**
   - Interdiction d'envoyer de la prospection depuis le domaine principal de la boîte (ex: si le site est `maboite.com`, acheter `getmaboite.com` ou `maboite-app.com`).
2. **Authentification DNS obligatoire :**
   - **SPF (Sender Policy Framework) :** Autorise le serveur d'envoi.
   - **DKIM (DomainKeys Identified Mail) :** Signature cryptographique assurant l'intégrité de l'email.
   - **DMARC (Domain-based Message Authentication) :** Politique de traitement (au minimum `v=DMARC1; p=none;`).
   - **Custom Tracking Domain :** Configurer un sous-domaine de tracking personnalisé pour ne pas partager la réputation d'autres utilisateurs.
3. **Warm-up & Limites d'envoi :**
   - Chauffe automatique des boîtes pendant 14 jours minimum (via Instantly, Smartlead ou Lemlist).
   - Règle de sécurité : Maximum 30 à 40 cold emails par jour et par adresse email.
4. **Format Plain-Text strict :**
   - Zéro image, zéro pièce jointe, zéro bouton HTML élaboré.
   - Un seul lien maximum (voire zéro dans le premier message pour maximiser la délivrabilité).

---

### Phase 3 — Rédaction de la Séquence Complète (BOS rédige)

BOS rédige les 3 emails de la séquence en respectant la psychologie de l'acheteur occupé :

#### Email 1 — L'Accroche & Le Pain Point (<100 mots)

- **Objet :** 2 à 4 mots, tout en minuscules, style conversationnel ou interne (ex: *« question [prénom] »*, *« [concurrent] vs [entreprise] »*, *« point rapide sur [sujet] »*).
- **Ligne 1 :** Observation ultra-personnalisée montrant qu'un humain a regardé son activité.
- **Ligne 2-3 :** Le constat du problème ou de l'opportunité manquée avec une preuve d'autorité (« J'ai remarqué que sur votre boutique, le panier abandonné n'a pas de relance SMS. On a récemment généré +18% de CA sur une marque similaire simplement en activant ça »).
- **Ligne 4 (CTA doux) :** *« J'ai préparé une courte vidéo de 90 secondes montrant où se trouvent ces fuites de conversion. Ça vous intéresse que je vous partage le lien ? »*

#### Email 2 — La Relance Valeur (J+3) (<60 mots)

- Même fil de discussion (en réponse au premier email).
- Apport d'un insight concret ou d'une capture sans agressivité :
  *« Hello [Prénom], je sais que vos semaines sont chargées. Je voulais simplement vous partager cet exemple rapide de ce qu'on a mis en place pour [Cas client similaire]. Est-ce que ce sujet fait partie de vos priorités ce trimestre ? »*

#### Email 3 — Le Break-up Email (J+7) (<50 mots)

- Retire la pression tout en créant un effet de rareté psychologique :
  *« Bonjour [Prénom], je présume que ce n'est pas votre priorité du moment, aucun souci. Je ne vous relancerai plus à ce sujet. Si vous souhaitez explorer [Résultat spécifique] plus tard dans l'année, vous savez où me trouver. Excellente continuation dans [Projet récent]. »*
  *(Ce format génère paradoxalement souvent le plus haut taux de réponse en libérant le prospect de la culpabilité).*

---

### Phase 4 — Sourcing & Constitution du Fichier de Prospects

BOS accompagne l'entrepreneur dans la collecte de contacts cibles :
1. **Outils recommandés :** Sales Navigator, Apollo.io, Kaspr, Pharow ou scraping d'annuaires métiers.
2. **Nettoyage de liste (Email Verification) :** Vérification systématique des emails via NeverBounce, Zerobounce ou BounceBan pour maintenir un taux de rebond (bounce rate) inférieur à 2%.
3. **Segmenter par grappes de 50 prospects :** Ne pas tout lancer d'un coup. Tester une grappe de 50 → analyser les retours → ajuster l'angle.

---

### Phase 5 — Exécution Immédiate & Enchaînement

- Ne pas s'arrêter à la théorie : envoyer ou planifier les 5 premiers messages dans la session.
- Documenter la séquence dans `Output/Outbound_Campaign_[Nom]_[Date].md`.
- Mettre à jour `Core/Actions.md` avec l'objectif chiffré de la semaine (ex : « Envoyer 30 messages personnalisés par jour »).
- Mettre à jour `Core/Business.md` (section Marketing / Prospection).

## Output

| Fichier | Contenu |
|---------|---------|
| `Output/Outbound_Campaign_[Nom]_[date].md` | Stratégie ICP, configuration technique, séquence complète (emails + relances), scripts DM |
| `Core/Actions.md` | Objectifs de volume journaliers et revue hebdomadaire |
| `Core/Business.md` | Mise à jour du canal d'acquisition sortant |

## Garde-fous

- **Ne JAMAIS prospecter depuis le domaine racine de l'entreprise.** Risque mortel de blacklistage du domaine principal.
- **Ne JAMAIS envoyer des messages de plus de 150 mots en prospection à froid.** Personne ne lit des pavés de vente non sollicités.
- **Ne JAMAIS demander un rendez-vous téléphonique de 45 minutes d'emblée.** Demander d'abord l'autorisation de partager de la valeur ou l'intérêt pour le sujet.
- **Ne JAMAIS scaler une campagne sans avoir obtenu de premières réponses positives.** Valider l'angle sur 50 à 100 prospects avant d'automatiser à plus grande échelle.
- **Ne JAMAIS prospecter sans vérification préalable des adresses emails.** Un bounce rate > 3% détruit la délivrabilité.
