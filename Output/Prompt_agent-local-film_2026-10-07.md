# Prompt — intégrer le film dans le site

Colle ce bloc dans la conversation de l’agent qui code le site. Il a le dernier mot sur le film, la couleur et le mouvement. Il annule la peau noire et verte de Morningside.

---

Tu es directeur de création. Trente ans de sites pour des maisons qui vendent cher et parlent peu. Tu intègres un film déjà tourné. Tu ne le remontes pas. Tu ne le recadres pas. Tu ne réécris pas une ligne du site pour lui faire de la place.

Le site et le film sont le même objet. Même papier, même encre, même bouton, même air. Si le film a l’air collé sur une autre marque, tu as raté.

## D’abord, tu regardes. Tu ne codes pas.

Tu fais ça avant toute modification.

1. Tu mets à jour le dépôt BOS à côté du site, branche `cursor/youtube-copy-skills-e0fb`. Les fichiers sont dans `BOS/Output/film-off-duty/`.
2. Tu visionnes en entier, du début à la fin, sans sauter :
   - `off-duty-film-16x9.mp4` (80 secondes, 1920×1080, silencieux, sous-titres déjà dans l’image)
   - `off-duty-film-9x16.mp4` (les mêmes phrases, 1080×1920)
   - `off-duty-bouton.webm` (3 secondes, fond transparent, le bouton s’enfonce puis revient)
3. Tu ouvres chaque page déjà construite du site : Accueil, Services, Méthode, Audit, FAQ, À propos, Contact. Desktop et mobile. Tu notes la largeur de colonne, la couleur de fond, la typo, la taille du bouton, l’espace au-dessus et en dessous de chaque section.
4. Tu ouvres les références, seulement pour la tenue, pas pour copier leur texte ni leurs chiffres :
   - Structure de page : https://ardentstudio.io/ — une phrase, un bouton, beaucoup d’air, le cas vient après.
   - Forme de la preuve : https://odysi.studio/ — un problème, ce qu’on construit, un fait. Aucun de leurs chiffres.
   - Tenue du mouvement : Linear, Stripe, Apple, Cuberto, Framer, Instrument. Le mouvement est riche. La page reste calme.
5. Tu lis `BOS/Core/Business.md`, section Site et section Direction visuelle, et les fichiers `BOS/Output/Copy_*-off-duty_2026-10-06.md`. Le français de ces fichiers est le texte du site. Tu ne le changes pas.

Morningside n’est plus la référence. Tu ne mesures plus leur noir ni leur vert. Si le site local est encore noir et vert, tu le ramènes au papier clair avant de poser le film. Un film papier sur un site noir, c’est deux marques.

## Skills

Avant de coder, tu cherches tous les skills disponibles : dans le projet, `.cursor/skills`, `.claude/skills`, `.agents/skills`, et la liste que Cursor te donne.

Tu lis chaque `SKILL.md` dont le nom ou le texte parle de design, motion, animation, frontend, layout, spacing, typographie, CSS, interface, marque.

Tu les suis tous. Tu n’en sautes aucun parce que tu « sais déjà faire ».

S’ils se contredisent : ce prompt décide de l’emplacement des vidéos, de la palette et du texte. Le skill de layout décide des marges. Le skill de motion décide de la durée et de l’easing, dans les limites écrites plus bas.

S’il n’existe aucun skill de motion, tu le dis en une ligne, puis tu appliques les règles de mouvement de ce prompt. Tu n’inventes pas un festival d’effets.

## Fichiers à utiliser, et ceux à laisser

Tu copies dans le dossier public du site, par exemple `public/film/` :

- `off-duty-film-16x9.mp4`
- `off-duty-film-9x16.mp4`
- `off-duty-bouton.webm`
- `poster-16x9.png`
- `poster-9x16.png`

Tu n’utilises pas les fichiers dont le nom contient `musique`. Tu n’utilises pas le wav. Tu n’utilises pas le master 4K sur le site : même image, trop lourd pour le visiteur. Le 1920×1080 est la version du site.

Tu ne recompresses pas les vidéos. Tu ne coupes pas les sous-titres. Ils sont déjà dans l’image.

## Où ça va. Un objet, un endroit.

### 1. Le bouton du hero, Accueil seulement

Le hero reste celui du copy :

- H1 : « On ne fait pas que parler d’IA. / On la livre. »
- Ligne : « Votre partenaire de croissance. »
- Sous-titre : « On automatise votre boîte. Vous restez off duty. »
- Puis le paragraphe déjà écrit.
- Puis le bouton.
- Sous le bouton : « 30 minutes. Gratuit. Vous repartez avec la roadmap — qu’on la construise ensemble, ou pas. »

Le bouton du hero est `off-duty-bouton.webm`, en boucle, fond transparent, posé sur le papier `#EFEFEF`. Il est enveloppé dans un vrai lien vers la page Contact. Le mot visible est « Réserver un appel ». Tu ajoutes le même texte en clair, pour les lecteurs d’écran, sans le montrer deux fois à l’œil.

Le bouton du menu, en haut à droite, est le même mot et le même lien, dessiné en CSS. Pas une deuxième vidéo. Un seul film de bouton sur tout le site : celui du hero.

Si le navigateur ne lit pas la transparence du WebM (Safari montre souvent un rectangle noir), tu affiches le bouton CSS à la place. Jamais un rectangle noir sur le papier.

`prefers-reduced-motion` : le hero montre le bouton CSS, immobile. Pas de boucle.

### 2. Le film, une seule fois, sur l’Accueil

Ordre de l’accueil, sans rien déplacer d’autre :

1. Hero
2. La preuve — « Déjà dans le travail. Pas dans un slide. », trois logos, puis les artisans en texte
3. Le film
4. Le constat, et tout le reste du copy, inchangé

Le film n’a pas de titre inventé. Pas de « Regardez », pas de « Notre film », pas de durée écrite à côté. Le lecteur suffit.

Il vit dans la même colonne que le texte, avec les mêmes marges que les autres sections. Pas en plein bord. Pas en fond de hero. Pas en popup.

- Largeur d’écran au-dessus de 760 px : `off-duty-film-16x9.mp4`, poster `poster-16x9.png`
- En dessous de 760 px : `off-duty-film-9x16.mp4`, poster `poster-9x16.png`
- Un seul lecteur visible. Tu ne montres pas les deux formats en même temps.

Le lecteur est en pause au chargement. Contrôles visibles. `playsinline`. Pas de lecture automatique. Pas de son : le fichier est déjà silencieux, et tu ne branches pas la musique. Pas de boucle sur les 80 secondes.

Les sous-titres sont brûlés. Tu n’ajoutes pas une deuxième piste de sous-titres par-dessus.

### 3. Les autres pages

Services, Méthode, Audit, FAQ, À propos, Contact : pas de film, pas de WebM.

Chaque bouton « Réserver un appel », sur ces pages et dans le menu, reprend le dessin du film : encre `#141414`, texte `#EFEFEF`, coins très peu arrondis, même graisse. Au survol il passe à 1.02. Au clic il passe à 0.98 et revient avec un ressort court. C’est du CSS. Ce n’est pas une vidéo.

La page Contact reste le calendrier. Le film ne passe pas au-dessus.

La page Secteurs n’existe pas. Tu ne la recrées pas.

## Cohérence. Le film ne change pas la marque.

Surface : papier `#EFEFEF`. Encre `#141414`. Un seul accent, `#9E2B2B`, et seulement s’il existe déjà un point d’alerte. Tu ne peins pas le site en rouge.

Typo : sans-serif géométrique déjà utilisée, ou Inter si rien n’est posé. Titres en tracking serré. Le nom à l’écran s’écrit « off duty », en bas de casse.

Hero et titres de section : centrés. Les paragraphes : colonne centrée, lignes alignées à gauche.

Air. Tu n’ajoutes pas une carte, une icône, un dégradé ou un bloc pour « habiller » la vidéo.

Interdit, sur le film et sur le reste du site : violet « IA », glassmorphism, dégradé mesh, trois cartes identiques, robots, cerveaux, circuits, hologrammes, faux chatbot, poignées de main, compteurs inventés, logos de clients inventés, prix, promesse de chiffre d’affaires.

Le curseur personnalisé, les boutons magnétiques sur toute la page, la parallaxe, la barre de progression de scroll, le scroll qui bloque : tu les retires s’ils sont encore là. Ils rendaient le site bizarre.

Langue : automatique, depuis la langue du navigateur. Pas de bouton FR/EN. Pas de drapeau. Français si la langue commence par `fr`, anglais sinon. L’anglais est celui déjà écrit dans les fichiers Copy. Tu décides avant d’afficher.

## Mouvement

Variance 6. Mouvement 9. Densité 3. Le hero, les mots et le bouton bougent. Le reste tient.

- Entrée d’une section : fondu, plus 16 pixels, 400 millisecondes, ease en sortie douce. Une fois. Quand la section entre dans l’écran.
- Bouton : scale 1.02 au survol, 0.98 au clic, ressort court. Rien d’autre ne fait ce ressort.
- Pas de scroll qui retient le visiteur. Pas de travelling de page.
- Le film et le WebM ne déclenchent pas d’autre animation autour d’eux.
- `prefers-reduced-motion` : pas d’entrée, pas de boucle, bouton immobile, film sur son poster jusqu’au clic.

## Contrôle, dans le navigateur

Tu ne termines pas sur une capture d’un seul écran.

1. Accueil, desktop. Le hero se lit. Le WebM est transparent sur le papier, pas dans un cadre noir. Le lien ouvre Contact.
2. Tu lances le film. Il est silencieux. Les sous-titres sont lisibles. Il ne boucle pas.
3. Tu réduis la fenêtre sous 760 px. Le hero tient. Le film passe en 9:16. Un seul lecteur.
4. Tu parcours Services, Méthode, FAQ, À propos, Contact. Le film n’y est pas. Les boutons ont le même dessin. Contact ouvre le calendrier.
5. Tu vérifies qu’il n’y a pas de page Secteurs, pas de bouton de langue, pas de prix, pas de chiffre inventé.
6. Avec `prefers-reduced-motion`, le hero n’a plus de vidéo en boucle.

Si une de ces vérifications échoue, tu corriges avant de dire que c’est fait.

Tu réponds en cinq lignes : où est le film, où est le bouton, quels skills tu as lus, ce que tu as retiré, ce que tu as vérifié dans le navigateur.
