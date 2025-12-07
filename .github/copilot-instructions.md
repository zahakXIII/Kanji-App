# GitHub Copilot Instructions

## Project Overview
**Name:** Kanji App
**Purpose:** Réviser les kanji via des quiz rapides sur mobile (Expo/React Native).
**Status:** Active Development

## Technical Stack
- **Primary Language:** JavaScript
- **Framework:** React Native (Expo)
- **Runtime/Platform:** Expo / Metro bundler
- **Database:** Aucune (données locales CSV)
- **Key Libraries:** @react-navigation/native, @react-navigation/native-stack, react-native-screens, react-native-safe-area-context

## Coding Standards
### Style Guide
- **Standard:** Suivre le style existant du projet
- **Indentation:** 2 spaces
- **Quotes:** Single quotes
- **Line Length:** ~100 chars

### Naming Conventions
- **Variables:** camelCase
- **Functions:** camelCase
- **Classes/Components:** PascalCase
- **Constants:** UPPER_SNAKE_CASE
- **Files:** PascalCase pour composants d'écran, camelCase pour services/utilitaires

### Project-Specific Rules
1. Garder le bouton "Question suivante" accessible (sticky bas de page) et déblocable après réponse.
2. Préserver le thème clair pastel (accent corail, cartes blanches, blobs doux).
3. Ne pas casser la navigation Home → Quiz → Results.

## File Organization
```
src/
├── screens/      # Home, Quiz, Results
├── services/     # KanjiService
├── components/   # UI réutilisable
├── data/         # Échantillon CSV démo
├── navigation/   # AppNavigator
└── utils/        # Helpers si besoin
```

## Current Development Context
**Active Branch:** main
**Current Sprint/Milestone:** UI/UX pastel + jeu de données complet
**Active Task:** Contexte Copilot et documentation

### Recent Changes
- 2025-12-07 UI clair pastel appliqué (Home/Quiz/Results), bouton suivant sticky.
- 2025-12-07 Ajout dataset complet (joyo_kanji.csv, kanji_radicals.csv) + README.
- 2025-12-07 Création des fichiers de contexte Copilot.

## Critical Rules for Copilot
### ALWAYS Do:
1. Lire les fichiers de contexte avant de coder.
2. Suivre les patterns et styles existants (2 espaces, single quotes).
3. Préserver la navigation et l’accessibilité (bouton Next sticky, texte lisible).
4. Mettre à jour la documentation/recent changes si modifications majeures.
5. Demander clarification si besoin.

### NEVER Do:
1. Casser le flux Home → Quiz → Results.
2. Ajouter des dépendances lourdes sans validation.
3. Supprimer des données du dataset.
4. Introduire une régression d’accessibilité (boutons inatteignables).

## Communication Protocol
- Avant de commencer : résumer la tâche et lister les fichiers ciblés.
- Pendant : suivre les patterns, signaler tout blocage/risque.
- Après : résumer les modifications, tests effectués, points ouverts.

## Testing Requirements
- Tests automatisés: non présents. Faire au moins un test manuel rapide (npx expo start) après changements UI/logic.
- Couverture minimale: n/a pour l’instant.
