---
name: JSX in hook files
description: Pattern used when a "hook" file needs to export a React component with JSX.
---

## Rule
TypeScript/esbuild reject JSX in `.ts` files — they require `.tsx`. When a hook needs to return JSX (e.g. render Mapbox layers), the component must live in a `.tsx` file.

## Pattern used in this project
Instead of renaming hook files (which would break external imports), we:
1. Create `ComponentName.tsx` in `/components/` with the JSX component
2. Keep the hook file (`useX.ts`) as a re-export stub: `export { ComponentName } from "@/domains/.../ComponentName";`

This way all existing imports from the hook path continue to work.

**Why:** esbuild (used by Vite) cannot parse JSX in `.ts` files, even though `tsc` may tolerate it with `allowImportingTsExtensions`. The error manifests as "Unexpected `>`" at runtime/build time even after typecheck passes.
