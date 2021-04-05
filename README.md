# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Gestionnaire de tâche

> Voici un gestionnaire de tâche basique encore en cours de développement. Pour le moment il permet d'afficher les tâches qui proviennent d'une [API](https://605375c645e4b30017291be6.mockapi.io/tasks/) sous forme de liste (les unes sous les autres) en 2 blocs : les tâches en cours et les tâches terminées. Il y a un formulaire en dessous des listes qui permet de rajouter une tâche en cours sur l'API ainsi qu'un bouton permettant de supprimer toutes les tâches terminées aussi sur l'API.

# Fonctionnalités implémentées

## 1. Tâches affichées sous forme de liste (les unes sous les autres)

## 2. Les tâches sont ordonnées en deux blocs : d’abord les tâches en cours, ensuite les tâches terminées

## 3. Un champ texte permet d’ajouter une nouvelle tâche en cours

## 4. Un bouton permet de supprimer toutes les tâches terminées

## 5. La liste de tâches est récupérée depuis une API externe disponible à l’adresse : https://5efb52e180d8170016f7639f.mockapi.io/tasks (ci-après désignée par endpoint).

## 6. Les actions d’ajout, de marquage terminé et de suppression des tâches effectuent l’action sur l’API. La structure complète d’un objet task est la suivante :

# Fonctionnalités restant à implémentées

## Ordonné chaque bloc par date de création

## La possibilité de marqué une tâche comme terminée

# Bibliothèques utilisées

## React Hook Form

Utilisé pour simplifier l'implémentation d'un formulaire dans le code du fichier AddTask.js ainsi que la récupération des données du formulaire pour pouvoir effectuer l'action d'ajout sur l'API.
