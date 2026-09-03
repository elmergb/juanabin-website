# JuanaBin PH Landing Page

React and Vite landing page for JuanaBin PH, a waste-segregation rewards concept powered by Stellar.

## Architecture

```text
src/
  app/                  Application composition and providers
  components/
    layout/             Site-wide navigation and footer
    ui/                 Small reusable presentation components
  config/               Stable site configuration and external links
  feature/pages/        Existing landing-page feature implementation
  hooks/                Reusable React behavior
  pages/                Route-level page entry points
  assets/               Imported static assets
  main.tsx              Browser entry point
```

### Placement rules

- Keep application startup and global composition in `src/app`.
- Keep route-level screens in `src/pages`; pages compose features instead of owning startup.
- Put domain-specific UI, content, state, API adapters, and feature-only types in `src/features/<feature-name>` as the product grows.
- Put reusable layout and UI primitives in `src/components`.
- Put reusable React behavior in `src/hooks`; put pure calculations and transformations in `src/lib`.
- Put stable URLs and application settings in `src/config`.
- Keep API clients in `src/services` and keep network calls out of UI components.
- Keep shared types in `src/types`; feature-only types stay with their feature.

The current landing page remains at `src/feature/pages/LandingPage.tsx` as the feature implementation. `src/pages/LandingPage.tsx` is the public page boundary, so future refactors do not need to change the app shell.

## Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run lint
npm run build
```
