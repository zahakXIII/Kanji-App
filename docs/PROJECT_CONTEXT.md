# Project Context Master Document

## System Architecture
- Type: Monolith mobile app (Expo/React Native)
- Data: CSV locales chargées côté client, KanjiService pour générer les QCM

### Key Components
1. **Screens** - Home, Quiz, Results (navigation native-stack)
2. **Service** - KanjiService (construction des questions à partir des données)
3. **Data** - CSV (échantillon + dataset complet pour extension ultérieure)

### Data Flow
```
User → UI (Home/Quiz) → KanjiService (sélection questions) → UI feedback → Results
```

### External Dependencies
- @react-navigation/native + native-stack (navigation)
- react-native-screens / safe-area-context (stabilité/gestes)

## Development Environment
### Prérequis
- Node.js 18+
- npm
- Expo CLI (`npx expo`) côté projet

### Setup
```bash
npm install
npx expo start
```

### Environment Variables
- Aucune requise actuellement (données embarquées)

## Project Roadmap
- Phase actuelle: UI/UX pastel + consolidation données
- Prochaines étapes: 
  1) Intégrer le dataset complet dans KanjiService (chargement CSV / pagination)
  2) Ajouter stats/local storage (progrès utilisateur)
  3) Ajouter tests UI/logic (Jest/RTL) si besoin

## Known Issues & Technical Debt
- Pas de tests automatisés
- KanjiService utilise encore l’échantillon; chargement CSV complet à implémenter
- Accessibilité: ajouter haptique/annonces vocales si ciblé

## Decision Log
- 2025-12-07: Thème clair pastel adopté (corail + cartes blanches + blobs).
- 2025-12-07: Bouton "Question suivante" sticky en bas pour ergonomie mobile.

## Glossary
- **QCM**: Questionnaire à choix multiple
- **Kanji**: Caractère japonais
