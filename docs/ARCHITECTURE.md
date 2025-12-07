# System Architecture

## Design Principles
1. Simplicité et lisibilité (UI claire, peu d’états globaux)
2. Accessibilité mobile (CTA atteignable, contrastes suffisants)
3. Séparation des rôles (écrans pour UI, service pour données)

## Architecture Pattern
- Layered/feature simple : Screens (presentation) ↔ Service (data prep) ↔ Local data (CSV)

## Layer Structure
```
Presentation (screens)
Business/Data prep (KanjiService)
Data (CSV embarqué, dataset complet)
```

## Component Interaction
- Navigation stack entre écrans
- KanjiService fournit les questions à l’écran Quiz

## Security Considerations
- Pas d’API distante; données locales
- Si sync future: prévoir HTTPS + clé API

## Performance Requirements
- Démarrage rapide et interactions fluides sur mobile
- Liste réponses limitée (4 options) pour rester réactif

## Scalability Strategy
- Dataset local; si passage serveur: prévoir pagination et cache côté client
