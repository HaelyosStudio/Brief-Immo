
## Projet Simplon CDA

Ce brief était à faire seul.
J'ai décidé de réaliser un projet HTML/CSS/JS. J'ai commencé par analyser la demande et créer un Trello sur lequel j'ai pu m'organiser. Ensuite, j'ai créé un dépôt Github pour partager mon code.
## Commandes à effectuer

```bash
git clone git@github.com:HaelyosStudio/Brief-Immo.git
```

```bash
cd Brief-Immo
```

```bash
Launch Live Server
```
Ou
```bash
code .
```
## Contexte

Introduction

​

Ce projet adopte la POO en JavaScript pour organiser le code de manière modulaire et réutilisable. Les annonces immobilières seront modélisées sous forme d'objets, ce qui en simplifie la manipulation et la gestion. Les classes seront conçues selon le principe d'encapsulation, garantissant que chaque classe contient toutes les données et fonctions nécessaires à son fonctionnement autonome.

​

Votre projet reposera sur une classe fondamentale `BienImmobilier` 🏠, qui regroupera les attributs universels des biens immobiliers, tels que `id`, `titre`, `description`, `prix`, et `adresse`.

​

Vous enrichirez cette base par des classes spécialisées telles que `Appartement`, `Maison`, et `Terrain`, chacune héritant de `BienImmobilier` et y ajoutant ses spécificités.

​

Par exemple, la classe `Appartement` pourrait se distinguer par des propriétés supplémentaires comme `étage` et `ascenseur`, tandis que `Maison` pourrait se singulariser par la présence d'un `jardin` et d'un `garage`.

​

Vous êtes encouragés à explorer au-delà de ces suggestions en introduisant de nouvelles classes ou en adaptant les existantes selon les besoins de votre application.

​

Affichage des Annonces

​

    Développez une interface utilisateur permettant de visualiser toutes les annonces immobilières enregistrées (page de liste d’annonces).
    Chaque annonce doit afficher des informations clés telles que le prix du bien, la localisation, et une brève description.

​

Fonctionnalités

​

    Implémentez un formulaire permettant aux utilisateurs d'ajouter de nouvelles annonces immobilières. Le formulaire doit recueillir des informations essentielles telles que le titre de l'annonce, le prix, l'emplacement, une description.
    Assurez-vous que le formulaire valide les entrées utilisateur pour garantir la qualité des données.
    Un système de filtre pourra être mis en place pour filtrer les annonces affichées à l’utilisateur selon différents critères (prix, surface, …).

​

Gestion des Données

​

    Utilisez le localStorage du navigateur pour stocker les annonces immobilières. Cela permettra de persister les données entre les sessions de navigation sans nécessiter un backend.

​

Consignes Supplémentaires

​

    Responsivité : Assurez-vous que le site est responsive et offre une expérience utilisateur optimale sur les appareils mobiles et de bureau.
    Modularité : Organisez votre code en modules distincts pour séparer clairement la logique métier de la manipulation du DOM et des styles.

​

Autres

​

Temps #1 collectivement - découverte du cahier des charges

Temps #2 collectivement - remédiation, récapitulatif du brief et stratégie de développement

​

Bonus : Une page secrète, accessible uniquement aux utilisateurs disposant des identifiants appropriés (email et mot de passe), offre à l'administrateur la possibilité de gérer les annonces immobilières. Sur cette page, l'administrateur peut visualiser, modifier ou supprimer les annonces enregistrées sur la plateforme.

## 🔗 Livrables
Mon GitHub :[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/HaelyosStudio)

Mon Trello :
[![trello](https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white)](https://trello.com/invite/b/Gxd3jH8Q/ATTI2389ddecbe07a26188642a8162f73de1A4294AD9/code-immo)

Mon projet :
[![project](https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://haelyosstudio.github.io/Brief-Immo/)

Ma maquette Figma :
[![figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/file/9S31wg03233ntL6GxUC6av/Code-Immo-Maquette?type=design&node-id=0%3A1&mode=design&t=cbyrhwx5wyMzKq1g-1)

