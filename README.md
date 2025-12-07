# Kanji App

Une appli Expo/React Native pour réviser les kanji via des quiz rapides.

## Fonctionnalités
- Quiz QCM avec progression visuelle et bouton "Question suivante" toujours accessible.
- Thème clair premium (pastels, cartes blanches, accent corail).
- Score et stats de fin de session avec reprise rapide.
- Données kanji/radicaux embarquées (voir `dataset/archive/`).

## Démarrer
```
pm install
npx expo start
```

## Structure
- `src/screens/` : Home, Quiz, Results.
- `src/services/KanjiService.js` : génération des questions.
- `src/data/` : échantillon CSV pour la démo.
- `dataset/archive/` : jeu de données complet (joyo_kanji.csv, kanji_radicals.csv).

## Publication
Le dépôt est poussé sur `main` : https://github.com/zahakXIII/Kanji-App.git
