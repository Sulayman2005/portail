la version de vite sur mpon projet 

VITE v8.3.5

## TP 01

### 1 — Mise en place

- Projet créé avec `npm create vite@latest portail -- --template vanilla --no-interactive`.
- Version de Vite affichée : [À REMPLIR — ex. VITE v7.x.x]
- Adresse servie : http://localhost:5173/

Quelques soucis au démarrage, sous Windows :

- PowerShell bloquait `npm` (« l'exécution de scripts est désactivée »). Réglé avec
  `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`, puis `Unblock-File` sur le dossier de Node,
  installé depuis un zip téléchargé.
- J'avais Node 22 au lieu de Node 24 demandé : [À REMPLIR — mis à jour / gardé la 22].
- La commande `cp` de l'énoncé ne marche pas sous PowerShell, j'ai utilisé
  `Copy-Item env\img\*.jpg, env\img\*.webp, env\img\*.avif -Destination public\img`.
- `&&` n'existe pas dans le PowerShell de Windows : commandes Git tapées une par une.
- La ligne `env/` n'avait pas été enregistrée dans `.gitignore` : `git status` montrait encore `env/`.
  Ajoutée avec `Add-Content`, vérifiée avant le premier commit.

Démo de Vite retirée (`counter.js`, `style.css`, `assets/`, `icons.svg`), `main.js` réduit à un commentaire.

### 2 — Lecture de la maquette

**Prédiction du plan de titres de l'accueil (écrite avant de coder) :**

[À REMPLIR — ta prédiction à toi]

**Régions de l'accueil :**

| Zone de la maquette | Balise |
| --- | --- |
| Logo + menu (Services, Mes demandes, Aide, Mon espace) | `header` + `nav` |
| Titre, accroche, recherche, catégories, services à la une | `main id="contenu"` |
| Trois colonnes Le portail / Contact / Informations + copyright | `footer` |

Pas d'`aside` sur l'accueil ; il apparaît sur la liste des services (les filtres).

[À COMPLÉTER pour services, service, demande, espace]

Inventaire et écarts dans `docs/inventaire.md`.

### 3 — Les pages

Choix faits sur l'accueil :

- Le menu de la maquette n'a pas de lien « Accueil » : c'est le nom du portail, dans l'en-tête, qui
  ramène à l'accueil et qui porte `aria-current="page"` sur cette page.
- Le champ de recherche a un vrai `label`, alors que la maquette ne montre qu'un placeholder.
- Dans les cartes, le lien vers la fiche est dans le `h3`. J'ai retiré « Voir la fiche » pour ne pas
  avoir deux liens vers la même page, dont trois « Voir la fiche » identiques sur l'écran.
- Les illustrations des cartes ont `alt=""` : ce sont des pictogrammes, et le titre juste à côté dit
  déjà de quel service il s'agit.
- Le badge de catégorie est placé avant le `h3` pour garder l'ordre visuel de la maquette sans CSS.
- Les `id` viennent de `env/api/db.json`. Attention, la catégorie Aides a l'`id` `aide`, sans « s ».

