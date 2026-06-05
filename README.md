# Latitud

Interactive real estate map application. Find properties by drawing directly on the map.

## Monorepo Structure

```
artifacts/
  latitud/          # Frontend — React + Vite + Mapbox GL
  api-server/       # Backend — Node.js REST API
lib/
  db/               # Database layer — Drizzle ORM
  api-spec/         # OpenAPI spec + Orval codegen
  api-client-react/ # Type-safe API client for React
  api-zod/          # Zod schemas generated from API spec
```

## Frontend Features
- Interactive map with property markers (rent & sale)
- Freehand polygon drawing to filter properties by area
- Region stats: average price, min/max, count by type
- Nearby places via Overpass API (OpenStreetMap)
- Traffic, cycling and transit map layers
- Property modal with photo carousel and favorites
- Filter panel: price range, type, bedrooms, parking

## Tech Stack

**Frontend:** React, Vite, TypeScript, Tailwind CSS, shadcn/ui, react-map-gl, Zustand, TanStack Query, Turf.js, Wouter

**Backend:** Node.js, Drizzle ORM, OpenAPI, Orval

## Getting Started

```bash
# Install dependencies (from monorepo root)
pnpm install

# Run the frontend
cd artifacts/latitud
cp .env.example .env.local
# Add your Mapbox token to .env.local
pnpm dev
```

## Environment Variables

| Variable | Location | Description |
|---|---|---|
| `VITE_MAPBOX_TOKEN` | `artifacts/latitud/.env.local` | Mapbox public access token |
