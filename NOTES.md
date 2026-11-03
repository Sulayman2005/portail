la version de vite sur mpon projet 

VITE v8.3.5

L'adresse servie : http://localhost:5173/

### Prédiction — Plan de titres (Accueil)
 h1 : Tous les services du campus, au même endroit
 h2 : Parcourir par catégorie
 h2 : Services à la une
 h3 : Prêt de caméra

 En-tête de page : <header> (contient le logo/titre du portail et le menu de navigation)

Navigation principale : <nav> (contient les liens ou le bouton du menu)

Contenu principal : <main id="contenu"> (contient le cœur de la page)

Contenu complémentaire / Barre latérale : <aside> (utilisé notamment pour les filtres sur la page des services).

Pied de page : <footer> (contient les mentions légales, le contact et l'accessibilité)


## TP 02

### Clavier

**Prédiction** : 2 Tab pour atteindre le champ Nom.
**Mesure** : 8 Tab : le lien « Portail des services », les 4 liens du menu (Services, Mes demandes, Aide, Mon espace), les 2 liens du fil d'Ariane (Accueil, Prêt de caméra), puis le champ Nom.
**Écart** : j'avais oublié que chaque lien de l'en-tête et du fil d'Ariane prend une tabulation. Un lien « Aller au contenu » en tête de page ferait gagner 7 tabulations.

**Remplissage au clavier seul** :
- Liste des services : les flèches ↑ ↓ changent le service sans ouvrir la liste ; Alt + ↓ ou Espace l'ouvre.
- Champ date : on tape jour, mois et année à la suite, le curseur passe seul d'une partie à l'autre. Le calendrier ne s'ouvre pas au clavier sans chercher.
- Boutons radio du créneau : Tab entre une seule fois dans le groupe ; ce sont les flèches qui passent de Matin à Après-midi, et elles cochent en même temps.
- Case de consentement : Espace la coche et la décoche.
- Envoi avec Entrée : ok, le formulaire part vers `espace.html` avec les données dans l'adresse (`?nom=…&prenom=…`).

**Envoi du formulaire vide** — navigateur : Google Chrome, version 155.0.4283.62 (Version officielle) (64 bits) :

La bulle s'affiche sous le premier champ obligatoire vide (Nom), et le focus y est placé.

### Images

**`sizes` des cartes** : `(min-width: 64rem) 50vw, 100vw`

**Prédiction** (écran de 390 px, densité 3) :
- 390 px < 64rem (1 024 px), donc `sizes` vaut `100vw`, soit 390 px CSS.
- 390 × 3 = 1 170 px réels à couvrir.
- Parmi 480w, 800w et 1200w, le plus petit fichier qui couvre 1 170 px est le 1200w.
- Le navigateur devrait télécharger le fichier `-1200.webp`.

**Mesure** (Chrome, DevTools, mode appareil 390 × 645, DPR 3, Network avec Disable cache et filtre Img, rechargement, défilement jusqu'à la 1re carte de `services.html`) :
- Fichier téléchargé : `logement-1200.webp`, ce qui confirme la prédiction.

**Remarques** :
- Sans régler le DPR, Chrome utilisait la densité de mon écran et chargeait les `-800.webp`. Le choix du fichier dépend bien de la densité.
- Des images en `loading="lazy"` hors de l'écran se sont quand même chargées : Chrome précharge les images lazy proches de la zone visible.
- Sur la fiche, l'image principale (`fetchpriority="high"`) est chargée en premier (`camera-1200.webp`).
