# Correction du déclenchement GA4 de la landing

## Objectif
Éliminer les doubles `landing_view` et préserver la session Google lors d’une première acceptation, sans modifier GTM, GA4, l’attribution, le design ou les parcours.

## Modifications prévues
- Remplacer l’envoi immédiat au montage par une initialisation qui mémorise l’état de consentement au chargement.
- Bloquer tout événement applicatif tant que le consentement Analytics n’est pas accordé et que le conteneur GTM a réellement traité son initialisation.
- Si le consentement était déjà accordé au chargement, conserver le `page_view` automatique et envoyer uniquement un `landing_view` après disponibilité.
- Lors d’un passage réel de refusé/non choisi à accordé, conserver l’ordre strict : mise à jour du consentement, `page_view`, puis `landing_view`.
- Maintenir un verrou d’unicité par chargement afin que React ou des appels répétés ne dupliquent jamais `landing_view`.
- Conserver l’URL complète, y compris GCLID et UTM, dans `page_location`.

## Fichiers concernés
- `src/lib/tracking.ts`
- `src/components/CookieBanner.tsx`
- `src/pages/Index.tsx`
- Tests de suivi et du vrai bouton de consentement

## Validation
- Vérifier les cinq scénarios demandés dans les tests.
- Lancer toute la suite de tests et le build de production.
- Ne rien publier.

## Détail technique
La disponibilité sera déterminée par le conteneur `GTM-TXSSG73C` chargé et l’événement `gtm.init` traité dans `dataLayer`, et non par la seule présence du stub `window.gtag`.
