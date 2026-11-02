# TP 01 — Le squelette du portail

> Module Frontend avancé · Durée estimée : 1h45 · Niveau : intermédiaire

## Objectifs d'apprentissage

À l'issue de ce TP, vous êtes capable de :

- découper une maquette en régions, puis en composants nommés par leur fonction ;
- écrire cinq pages en HTML sémantique : régions, plan de titres, listes, tableau, liens ;
- vérifier une page sans feuille de style et dans l'arbre d'accessibilité du navigateur ;
- mettre en place le projet Vite et le dépôt Git du binôme.

## Contexte

L'information sur les services du campus est dispersée entre des pages web, des affiches et des
adresses e-mail. Le campus veut la réunir dans un portail unique : prêt de matériel, salles,
logement, sport, aides et santé. Le client vous a remis une maquette de huit écrans, une charte et
un jeu de données. Vous construisez ce portail en binôme pendant cinq jours ; chaque soir, un jalon
est remis sur le dépôt.

Aujourd'hui, la structure seule : cinq pages HTML qui se lisent correctement sans une ligne de CSS.
La mise en forme arrive au jour 2, le comportement au jour 3.

La maquette est un document du client. Elle dit ce que le client veut voir ; elle ne garantit pas
que tout ce qu'elle montre est accessible. Quand votre intégration s'en écarte pour une bonne raison,
vous le notez.

## Prérequis

- Node 24 (`node --version`) et npm, un éditeur, Git, un compte GitHub.
- Firefox et Chrome à jour.
- Le dossier `env/`, fourni dans l'archive de ce TP : maquette et charte dans `env/maquette/`,
  illustrations dans `env/img/`, données dans `env/donnees.js` et `env/api/`. Lisez `env/README.md`.
- Le cours du jour 1, parties 1 à 3.

## Instructions

Un fichier `NOTES.md` à la racine du dépôt vous suit pendant les cinq jours, une section par TP.
Commencez par `## TP 01`. Deux règles, valables pour tout le module : une **prédiction s'écrit avant**
d'exécuter ou d'ouvrir l'outil, et une **sortie se recopie telle quelle**, sans la reformuler.
Committez à la fin de chaque partie.

### 1 — Le projet et le dépôt (15 min)

1. Créez le projet :

   ```bash
   npm create vite@latest portail -- --template vanilla --no-interactive
   cd portail
   npm install
   npm run dev
   ```

   Notez dans `NOTES.md` la version de Vite affichée et l'adresse servie.
2. Videz la démonstration de Vite : supprimez `src/counter.js`, `src/style.css` et `src/assets/`,
   laissez `src/main.js` vide (un commentaire suffit), et remplacez le contenu de `index.html`.
3. Déplacez le dossier `env/` de l'archive à la racine de `portail/` et ajoutez la ligne `env/` à
   `.gitignore` : il sert jusqu'au jour 5 mais ne se committe pas, ce que vous en utilisez se copie
   dans le projet. Copiez ensuite les illustrations : `mkdir -p public/img` puis copiez dans
   `public/img/` les fichiers `*.jpg`, `*.webp` et `*.avif` de `env/img/`. Une image copiée en
   `public/img/camera-800.jpg` se demande à l'adresse `/img/camera-800.jpg`.
4. Initialisez Git avec une branche `main` (`git init -b main`), créez un dépôt **privé** sur GitHub,
   poussez, puis ajoutez votre binôme et `@ssy-sdv` comme collaborateurs.

### 2 — Lire la maquette (20 min)

Ouvrez les écrans PNG de `env/maquette/` et lisez `charte.md`.

5. **Prédiction** : avant d'écrire une balise, notez dans `NOTES.md` le plan de titres de l'accueil
   tel que vous l'imaginez (`h1`, `h2`, `h3`, avec leur texte).
6. Découpez chaque écran en régions : en-tête, navigation, contenu principal, contenu complémentaire,
   pied de page. Notez pour chaque écran la balise de chaque région.
7. Écrivez `docs/inventaire.md` : un tableau avec une ligne par composant et quatre colonnes,
   **Composant**, **Écrans**, **Variantes**, **États à concevoir**. Un composant est ce qui se répète ;
   son nom dit le métier (`service-card`), pas l'apparence (`carte-jaune`).
8. Ajoutez à l'inventaire une section « Écarts à la maquette » : chaque fois que votre intégration
   s'écartera de la maquette, une ligne avec l'écart et sa raison. Elle peut rester vide aujourd'hui,
   elle ne le restera probablement pas.

<details>
<summary>Indice : combien de composants ?</summary>

Une douzaine, en comptant ceux que la maquette montre une seule fois mais dont un écran a besoin
plusieurs fois (le bouton, le champ). Les états à concevoir sont ceux que la maquette ne dessine pas :
survol, focus, désactivé, invalide, page courante.

</details>

### 3 — Les cinq pages (55 min)

Une page HTML par écran, à la racine du projet :

| Écran | Fichier |
| --- | --- |
| Accueil | `index.html` |
| Liste des services | `services.html` |
| Fiche d'un service | `service.html` (la fiche du « Prêt de caméra » pour l'instant) |
| Formulaire de demande | `demande.html` (titre et chapeau seulement, le formulaire est au TP 02) |
| Espace personnel | `espace.html` |

9. Chaque page part du squelette vu en cours : `<!doctype html>`, `lang="fr"`, `charset`,
   `viewport`, et un `title` propre à la page, sous la forme « Page · Portail des services » (l'accueil peut
   garder le seul nom du portail).
10. Mêmes régions partout : un `header` avec le nom du portail et un `nav` principal, un `main`
    avec `id="contenu"`, un `footer`. Le lien de la page courante porte `aria-current="page"`.
11. Un seul `h1` par page, et aucun saut de niveau. Ce qui se répète est une liste : les catégories,
    les cartes de service. Une carte est un `article` dont le titre (`h3`) contient le lien vers la
    fiche.
12. Les données viennent de `env/api/db.json` : recopiez-les à la main pour les cartes affichées.
    Les liens sont relatifs (`./service.html?id=2`), jamais absolus.
13. La liste des services : les filtres dans un `aside`, avec un formulaire (champ de recherche,
    liste des catégories, case « Places disponibles uniquement »), puis la liste des cartes.
14. La fiche : le détail du service en liste de définitions (`dl`) pour le lieu, le délai et les
    places ; « Faire une demande » est un lien, « Ajouter aux favoris » un bouton.
15. L'espace personnel : les trois demandes de `db.json` dans un tableau de données, avec `caption`
    et des en-têtes `th` portant `scope`. Les préférences dans un formulaire, le thème en boutons
    radio sous un `fieldset`.
16. Chaque image porte `width` et `height` (les fichiers font 800 × 533 en version `-800`) et un
    `alt` décidé avec les trois questions du cours.

### 4 — Vérifier (15 min)

17. Dans Firefox, Affichage, Style de page, Aucun style : parcourez les cinq pages. L'ordre de
    lecture doit suivre la maquette. Notez ce que vous avez corrigé.
18. **Prédiction**, puis mesure : dans Chrome, DevTools, onglet Elements, panneau Accessibility,
    sélectionnez sur l'accueil (a) le champ de recherche, (b) le lien d'une carte, (c) le menu
    principal. Pour chacun, recopiez dans `NOTES.md` le **Name** et le **Role** affichés, tels quels,
    et d'où vient le nom (« Name » déplié).
19. Lancez Lighthouse, catégorie Accessibility seule, sur `index.html`. Avant, notez votre prédiction
    du score. Après, recopiez le score, la version de Chrome, et la liste des audits en échec ou à
    vérifier manuellement. Corrigez ce qui relève de la structure.

## Livrables

- Le dépôt du binôme, privé, `@ssy-sdv` en collaborateur, poussé sur `main`.
- Les cinq pages, `docs/inventaire.md` avec sa section d'écarts, `NOTES.md` avec sa section `## TP 01`.

**Terminé quand** : `npm run build` passe ; les cinq pages se lisent sans CSS dans l'ordre de la
maquette ; chacune a un seul `h1` et un `main id="contenu"` ; `NOTES.md` contient la prédiction du
plan de titres, les trois lectures du panneau Accessibility et le score Lighthouse avec ses audits.

## Pour aller plus loin

- Ajoutez en tête de chaque page un lien « Aller au contenu » vers `#contenu`, et vérifiez au clavier
  qu'il fait gagner une dizaine de tabulations.
- Comparez votre plan de titres réel à votre prédiction de l'étape 5.
