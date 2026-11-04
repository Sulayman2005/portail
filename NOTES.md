la version de vite sur mpn projet 

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

### Tabulations (étape 7)
Prédiction : 7
Mesure : 8 pressions de Tab pour atteindre le champ Nom.
Explication : 7 liens avant le champ (Portail des services,
Services, Mes demandes, Aide, Mon espace, Accueil, Prêt de caméra) + 1
pour le champ Nom = 8. Le « Demande » du fil d'Ariane est un span, le
h1 et le p ne reçoivent pas le focus.


http://localhost:5173/espace.html?nom=Martin&prenom=Camille&email=camille.martin%40exemple.fr&ville=Nantes&service=14&date_souhaitee=2026-11-03&creneau=matin&commentaire=ALI+VA+A+LA+MAISON&cgu=on