<img src=".readme/elemix-banner.svg" alt="elemix - Reactive Elements" width="100%" />

# Elemix Template

A template to help you get started with elemix.

## Scripts

| Script | What it does |
| --- | --- |
| `pnpm dev` | Start the Vite dev server with hot module replacement. |
| `pnpm build` | Compile and bundle for production into `dist/`. |
| `pnpm preview` | Serve the production build locally to preview it. |
| `pnpm storybook` | Start the Storybook dev server on port 6006. |
| `pnpm build-storybook` | Build a static Storybook into `storybook-static/`. |
| `pnpm typecheck` | Type-check the project with `tsc --noEmit`. |
| `pnpm analyze` | Run the elemix analyzer over `src/` to validate components and bindings. |
| `pnpm lint` | Lint and format-check with Biome, then check `tpl` template formatting. |
| `pnpm lint:tpl` | Check `tpl` template formatting with the elemix template formatter (`etf`). |
| `pnpm lint:fix` | Apply Biome's automatic fixes and reformat `tpl` templates. |
| `pnpm test` | Run the Storybook stories as browser tests (Vitest + Playwright Chromium). |
| `pnpm check` | Run `typecheck`, `lint`, and `analyze` together. |
