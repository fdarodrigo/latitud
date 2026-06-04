# Latitud

Real estate map search app for Fortaleza, Brazil — browse, filter, and draw search areas directly on an interactive Mapbox map.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- Main app: `artifacts/latitud/src/`
- Map store: `src/domains/map/store/map.store.ts` — single Zustand store for all map state
- Map components: `src/domains/map/components/` — MapContainer, DrawingLayer, MapLayersRenderer, NearbyMarkers, PriceMarker
- Listings mock: `src/domains/listings/mocks/listings.mock.ts`
- Mapbox config: `src/lib/mapbox.ts` — token + style URLs

## Architecture decisions

- **react-map-gl v8**: all imports from `react-map-gl/mapbox` (not `react-map-gl`). `mapbox-gl/dist/mapbox-gl.css` must be imported where `<Map>` is used.
- **Components returning JSX must be `.tsx`**: hook files (`useDrawing.ts` etc.) are thin re-export stubs pointing to `.tsx` component files in `/components/`.
- **Drawing**: custom freehand via `mapboxgl.Map` mouse events inside a `DrawingLayer` component rendered inside `<Map>` context.
- **Polygon filtering**: `@turf/turf` `booleanPointInPolygon` with `as any` cast (turf v7 doesn't export GeoJSON types at top level).
- **Nearby places**: Overpass API (no key needed). NearbyMarkers reads map center from `mapRef.getCenter()` via `useMap()`.

## Product

- Landing page (`/`) with hero map background + feature cards
- Map page (`/map`) with sidebar: property filters, freehand drawing tool, region stats, map layer controls (traffic/transit/cycling), nearby places search
- Price chip markers on map; click opens listing modal carousel
- Polygon drawing filters listings to drawn area in real time

## User preferences

_Populate as you build._

## Gotchas

- `VITE_MAPBOX_TOKEN` must be set as a secret for the map to render. Without it a Portuguese placeholder is shown.
- `LayerType` is defined in `map.store.ts` — not in `useMapLayers.ts` — to avoid circular imports.
- Cycling/transit layer toggles use `map.setLayoutProperty()` (imperative), not declarative `<Layer>` components, because they modify existing Mapbox Streets style layers.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
