# Prompt — agent local — coder le site Off Duty

Colle ce bloc tel quel dans la conversation locale qui code déjà le site.

---

Tu travailles dans le dossier du site, sur cette machine. Une autre conversation, sur le cloud, a déjà écrit tout le copy et le rangement. Tu n’as pas sa mémoire. Tu vas chercher ses fichiers, puis tu codes. Tu ne réécris pas le texte.

## 1. Récupère ses données

Si le dossier `BOS` n’est pas déjà à côté du site, lance :

```bash
git clone -b cursor/youtube-copy-skills-e0fb https://github.com/gaelmuzusa73-creator/BOS.git
```

S’il existe déjà :

```bash
git -C BOS fetch origin cursor/youtube-copy-skills-e0fb
git -C BOS checkout cursor/youtube-copy-skills-e0fb
git -C BOS pull origin cursor/youtube-copy-skills-e0fb
```

Ne change pas la branche du projet du site. Le dépôt BOS est la source du texte, pas le site.

Lis ces fichiers en entier avant d’écrire une ligne de code :

- `BOS/Output/Copy_accueil-off-duty_2026-10-06.md`
- `BOS/Output/Copy_services-off-duty_2026-10-06.md`
- `BOS/Output/Copy_methode-off-duty_2026-10-06.md`
- `BOS/Output/Copy_audit-off-duty_2026-10-06.md`
- `BOS/Output/Copy_apropos-off-duty_2026-10-06.md`
- `BOS/Output/Copy_faq-off-duty_2026-10-06.md`
- `BOS/Output/Copy_secteurs-off-duty_2026-10-06.md`
- `BOS/Output/Copy_contact-off-duty_2026-10-06.md`
- `BOS/Core/Business.md` (section Site et section Direction visuelle)

Le texte des pages est dans les blocs « Texte » de chaque fichier. Tu le poses tel qu’il est. Tu ne l’améliores pas, tu ne le raccourcis pas, tu ne le traduis pas.

## 2. Rangement

Menu visible, dans cet ordre : Services · Méthode · Secteurs · FAQ · À propos.

Le logo « Off Duty » ramène à l’accueil.

Un seul bouton, à droite du menu, sur toutes les pages : **Réserver un appel**. Il ouvre la page Contact.

Contact n’est pas un mot du menu. L’audit n’est pas un onglet : un lien depuis l’accueil et depuis Services.

Pied de page : « On automatise votre boîte. Vous restez off duty. » puis Réserver un appel · Mentions · Confidentialité.

Hors du site, tu ne crées pas ces pages : Formations, Blueprint, journal, blog, newsletter, prix, cas clients détaillés, une page par outil (n8n, Claude, agents).

Pages à coder :

1. Accueil — H1 : « On ne fait pas que parler d’IA. On la livre. » Ligne : « Votre partenaire de croissance. » Sous-titre : « On automatise votre boîte. Vous restez off duty. » Puis le bouton, la preuve, le constat, ce qui a déjà échoué, les trois gestes (identifier, construire, ancrer), le pattern, pourquoi un partenaire, la clôture.
2. Services — H1 : « Ce qu’un partenaire de croissance construit chez vous. » Trois blocs : l’outil du métier, les flux qui tournent seuls, l’agent dans le quotidien.
3. Méthode — H1 : « Comment on devient votre partenaire de croissance. » Six étapes.
4. Secteurs — H1 : « Votre métier. La tâche qui vous plafonne. » Les douze métiers du fichier, chacun avec pour qui, la phrase, ce que ça change, ce qu’on met en production, ce qui reste humain.
5. Audit — H1 : « L’audit d’un partenaire de croissance. Pas un slide. » Accessible par lien, pas par le menu.
6. FAQ — H1 : « Les objections, dites tout haut. » Une question, une réponse. Le bouton seulement en bas.
7. À propos — H1 : « Votre partenaire de croissance. » Le fondateur s’appelle Gaël Muzusa, en troisième personne. Pas de CV. Pas « un an de freelance ».
8. Contact — H1 : « Dites-nous où vous en êtes. » Le calendrier est la page. Quatre champs seulement si le calendrier ne s’ouvre pas : prénom, e-mail professionnel, entreprise, la tâche qui vous plafonne. Pas de budget. Pas de chiffre d’affaires.

Chaque page se termine par le même bouton. Sous le bouton : 30 minutes. Ils repartent avec la roadmap. Au mieux on la construit avec eux. Au pire ils la gardent.

## 3. Preuve

Sous le hero de l’accueil, avant le constat.

Ligne : « Déjà dans le travail. Pas dans un slide. »

Puis trois emplacements de logo, vides, même hauteur, gris, beaucoup d’espace. Légende en attente : Entreprise 1, Entreprise 2, Entreprise 3. Tu n’inventes pas de nom et tu ne télécharges pas de logo.

Sous les logos, une ligne de texte, pas de faux logos : « Et des artisans, sans enseigne. » Les noms viendront plus tard. Tu laisses la ligne prête.

Aucun pourcentage, aucun « 70 », aucun témoignage inventé.

## 4. Visuel

Référence de structure : un site court, beaucoup d’air, la typo fait le travail. Pas une grille de cartes lilas. Pas un catalogue d’outils.

- Fond : encre, très sombre, pas noir pur.
- Texte : blanc cassé.
- Accent : sable chaud, seulement sur le bouton et un mot du titre.
- Pas d’orange, pas de vert néon, pas de lilas, pas de corail.
- Pas d’illustration de laptop, pas de dégradé violet, pas de stock photo.
- Le hero mobile : la phrase en très grand, le bouton dessous. Rien d’autre au premier écran.
- Un seul style de bouton sur tout le site.

## 5. Ce que tu fais maintenant

Tu lis les huit fichiers. Tu construis les pages dans le projet du site déjà ouvert. Tu branches le bouton sur la page Contact. Si un calendrier n’est pas encore configuré, tu laisses l’emplacement et les quatre champs de secours.

Quand c’est codé, tu vérifies dans le navigateur : l’accueil, une page intérieure, le contact, et le mobile. Tu corriges ce qui casse.

Tu ne demandes pas à Gaël de choisir une structure. Elle est ci-dessus. Tu ne réécris pas le copy. S’il manque un nom de logo, tu laisses l’emplacement vide.
