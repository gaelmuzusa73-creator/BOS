# Prompt — copier le visuel Morningside, garder le texte Off Duty

Colle ce bloc dans la conversation locale qui code le site.

---

Tu codes le site Off Duty. Le texte est déjà écrit. Le visuel, tu le copies sur Morningside. Pas « inspiré de ». La même typo, les mêmes tailles, les mêmes marges, la même grille, les mêmes noirs, le même vert, le même rythme de sections. Leurs phrases, leurs chiffres et leurs clients restent chez eux.

## Pages à ouvrir et à mesurer

Ouvre chacune dans le navigateur. Relève les styles calculés : font-family, font-size, font-weight, line-height, letter-spacing, color, background, max-width, padding, gap, radius du bouton, hauteur du header. Reproduis ces valeurs. Ne les devine pas.

- https://www.morningside.ai/
- https://www.morningside.ai/services
- https://www.morningside.ai/team
- https://www.morningside.ai/work-with-us
- https://www.morningside.ai/case-study/building-new-zealands-first-ai-enabled-industrial-distributor

Regarde aussi le mobile de l’accueil : la phrase occupe l’écran, le bouton est dessous.

## Ce que tu copies

- Le fond presque noir et le vert qui sert de signal, sur les titres et le bouton.
- La typo. Si elle vient d’un service payant, prends la même famille sur Google Fonts ou l’équivalent le plus proche, et note laquelle tu as prise.
- Le header : logo à gauche, liens à droite, un bouton.
- Le hero : une phrase très grande, un sous-texte plus petit, beaucoup d’air, puis le bouton.
- La rangée de logos, grise, basse, espacée.
- Les sections numérotées, comme Identify / Develop / Adopt : un numéro, un titre, un paragraphe, puis la suite.
- La page équipe : grand titre, puis le nom en gros et le rôle en petit. Une seule personne : Gaël Muzusa. Pas de photo volée. Pas de compteurs.
- La page contact : un titre, quatre lignes, le formulaire étroit, les champs comme les leurs.
- Le pied de page : une phrase grande, puis les liens. Leur phrase à eux ne s’écrit pas. La nôtre : « On automatise votre boîte. Vous restez off duty. »
- Les largeurs de colonne, l’espace entre les blocs, le soulignement discret des liens.

## Ce que tu ne copies pas

- Aucune phrase anglaise.
- Aucun chiffre à eux : 13,4 m, 90 k, 2 700, 48, 11, neuf semaines, 200 heures.
- Aucun client à eux : Asmuss, Ashcroft, NBA, BarkBox, Citadel, ni leurs logos.
- Aucune photo de Josh Brown, Liam Ottley, ou de leur équipe.
- Leur e-mail, leur adresse à Auckland, leur formulaire avec budget et chiffre d’affaires.

## Le texte qui va dans ce châssis

S’il n’est pas déjà à côté du site :

```bash
git clone -b cursor/youtube-copy-skills-e0fb https://github.com/gaelmuzusa73-creator/BOS.git
```

Lis les blocs « Texte » de :

- BOS/Output/Copy_accueil-off-duty_2026-10-06.md
- BOS/Output/Copy_services-off-duty_2026-10-06.md
- BOS/Output/Copy_methode-off-duty_2026-10-06.md
- BOS/Output/Copy_audit-off-duty_2026-10-06.md
- BOS/Output/Copy_apropos-off-duty_2026-10-06.md
- BOS/Output/Copy_faq-off-duty_2026-10-06.md
- BOS/Output/Copy_secteurs-off-duty_2026-10-06.md
- BOS/Output/Copy_contact-off-duty_2026-10-06.md

Tu poses ce français tel quel. Tu ne le réécris pas.

Correspondance :

- Leur accueil → Accueil. H1 : « On ne fait pas que parler d’IA. On la livre. »
- Leur page services → Services, puis Méthode dans le même rythme numéroté.
- Leur page équipe → À propos. Un fondateur, pas une équipe de 55.
- Leur work-with-us → Contact. Calendrier d’abord. Quatre champs si le calendrier manque : prénom, e-mail professionnel, entreprise, la tâche qui vous plafonne.
- Leur FAQ, en bas de l’accueil → page FAQ, même typo, même largeur.
- Leur page cas, pour la largeur du texte seulement → Secteurs. Douze métiers, le texte du fichier. Pas leur histoire d’usine ni de basket.
- L’audit est une page au même gabarit, liée depuis l’accueil et Services, absente du menu.

Menu : Services · Méthode · Secteurs · FAQ · À propos.
Bouton unique : Réserver un appel.
Logo : Off Duty.

Sous le hero : « Déjà dans le travail. Pas dans un slide. » Trois emplacements de logo vides. Puis : « Et des artisans, sans enseigne. » Aucun pourcentage.

## Fin

Tu mesures, tu codes, tu ouvres l’accueil à côté de https://www.morningside.ai/ et tu corriges jusqu’à ce que l’écart soit la langue et le logo, pas la mise en page. Tu vérifies l’accueil, Services, À propos, Contact, et le mobile.
