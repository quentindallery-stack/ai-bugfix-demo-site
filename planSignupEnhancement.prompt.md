Plan d'évolution — Page d'inscription (signup)

Objectif
- Rendre la page d'inscription plus complète et professionnelle : ajouter un header et un footer réutilisables, enrichir le formulaire avec plus de champs et une validation côté client, et préparer l'intégration backend.

Contexte
- Fichiers existants : `app/layout.tsx`, `app/signup/page.tsx`.
- Déjà réalisé : header/footer et formulaire enrichi avec validation côté client (version initiale implémentée).

Scope de la prochaine itération
1. Refactor
   - Extraire `Header` et `Footer` en composants réutilisables dans `app/components/Header.tsx` et `app/components/Footer.tsx`.
   - Extraire le formulaire dans `app/components/SignupForm.tsx` pour tester et réutiliser.

2. Améliorations UX/UI
   - Ajouter focus styles, indications d'erreur accessibles (aria-live), et un style cohérent (tailwind utilities).
   - Affiner responsive (mobile/tablette/desktop) et état de chargement lors du submit.

3. Validation & Accessibilité
   - Garder validation synchronisée (email regex, mdp >= 8, confirmation, required fields), ajouter regex pour téléphone optionnel.
   - Ajouter attributs ARIA et labels explicites, tests manuels avec lecteur d'écran.

4. Intégration backend
   - Préparer l'appel API (fetch/axios) vers `/api/signup` (simuler avec un mock si pas encore disponible).
   - Gérer erreurs serveur (409, 422, 500) et afficher feedback utilisateur.

5. Tests
   - Unit tests pour la validation (Jest/React Testing Library).
   - Tests d'intégration légers pour le flux d'inscription (E2E possible avec Playwright/Cypress).

6. Documentation
   - Rédiger une courte note dans `README.md` ou `docs/` expliquant le composant, props, et le contrat API attendu.

Critères d'acceptation
- Header/Footer réutilisables importables depuis `app/components`.
- Formulaire extrait et testé (validation & affichage d'erreurs fonctionnels).
- Submit réel (ou mock) retournant success state affiché à l'utilisateur.
- Accessibilité de base respectée (labels, états d'erreur, keyboard nav).

Tâches optionnelles (améliorations futures)
- Flow multi-étapes (profil → préférences → confirmation).
- Internationalisation (i18n) et traduction de l'interface.
- Ajout d'une politique de mot de passe plus robuste (force meter, règles dynamiques).

Étapes immédiates proposées (ordre recommandé)
1. Extraire `Header`/`Footer` en composants séparés.
2. Extraire `SignupForm` et organiser la page pour l'utiliser.
3. Ajouter ARIA et améliorer styles & responsive.
4. Implémenter l'appel API mock et gérer erreurs.
5. Ajouter tests unitaires et d'intégration.

Besoin de précisions
- Veux-tu que je crée aussi les fichiers de test et les mocks immédiatement ?
- Préfères-tu que j'intègre un vrai endpoint (si tu as une API) ou que je mette un mock pour l'instant ?

---

Si tu veux, je peux maintenant :
- ouvrir le fichier pour le modifier et le transformer en `untitled:` dans l'éditeur (manuellement), ou
- poursuivre en commençant par l'extraction des composants (1ère tâche).

Dis-moi ta préférence.