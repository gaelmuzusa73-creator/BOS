# Skill: Readmail

Faire ouvrir et lire un email qui existe déjà, ou écrire l'objet et la première ligne avant le corps. Déclenché par `email` ou `coldmail` au moment de l'objet, ou quand les emails partent et ne sont pas lus. Source : Les mots magiques.

## Objectif

Fin de session : **objet, aperçu et première ligne** réécrits, plus le corps s'il manque. Une seule action. Fichier `Output/Readmail_[date].md`.

**Critères de succès :** l'objet peut se comprendre sans le corps. La première ligne n'est pas « j'espère que tu vas bien ». Il y a une raison d'ouvrir.

## Croyances

- **On n'ouvre pas par politesse.** On ouvre parce que la première seconde parle d'un symptôme, d'un fait, ou d'une question vraie.
- **L'aperçu est un second objet.** S'il répète l'objet ou commence par une formule vide, il est réécrit.
- **Une action.** Lire n'est pas le but. Répondre, cliquer, ou décider l'est. Un seul des trois.
- **Le témoignage qui se lit commence par la douleur.** Le logo et le prénom viennent après, ou pas.
- **Espionner les emails et pubs qui tournent longtemps est de la recherche.** Copier leurs phrases est interdit. Le démontage complet se fait dans `cashcopy`.
- **Le ghostwriting et le personal branding ne remplacent pas l'offre.** Si le projet est « écrire pour les autres » alors que le business n'est pas celui-là, on refuse et on revient à l'offre en cours.

## Process

### Phase 0 — Quel email

**Liste à soi →** le corps et la cadence restent dans `email`. Ici : objet, aperçu, première ligne.

**Inconnu →** `coldmail` pour la séquence. Ici : le triple tap de l'email 1 (aperçu, corps court, demande).

**Pas d'offre dans l'email de vente →** `offer` avant de chercher l'objet parfait.

### Phase 1 — Raison d'ouvrir

Écrire trois objets. Garder celui qui contient un fait ou un symptôme, pas une promesse abstraite.

Écrire l'aperçu : il ajoute une information, il ne répète pas l'objet.

### Phase 2 — Première ligne et action

La première ligne continue l'objet. Pas de météo, pas de présentation.

Une action en fin de mail, dite avec le résultat.

Si l'email est une preuve : la première ligne est la douleur du client, pas « ravi de ce partenariat ».

### Phase 3 — Livrer

Coller dans le brouillon de `email` ou `coldmail`. Ne pas créer une deuxième stratégie d'envoi ici.

## Output

```markdown
# À faire lire — [date]

- **Objet retenu :**
- **Objets écartés :**
- **Aperçu :**
- **Première ligne :**
- **Action :**
```

| Fichier | Contenu |
|---------|---------|
| `Output/Readmail_[date].md` | Objet, aperçu, ouverture |
| `Core/Actions.md` | Envoi |

## Garde-fous

- **Ne JAMAIS ouvrir par une formule de politesse.** → Symptôme ou fait.
- **Ne JAMAIS cacher le désabonnement pour « garder la liste ».** → Lien visible. Ça se règle dans `email`.
- **Ne JAMAIS copier l'objet d'une marque connue.** → Même tension, tes mots.
- **REFUSE un chantier ghostwriting qui détourne du business en cours.**
