---
name: Mapbox migration
description: react-map-gl v8 + mapbox-gl v3 + @turf/turf v7 migration from Google Maps. Key API, import, and architecture decisions.
---

## Import path
All react-map-gl components/hooks must be imported from `react-map-gl/mapbox` (not `react-map-gl`). In v8 the package is renderer-agnostic and Mapbox lives at the `/mapbox` subpath:
```ts
import { Map, Marker, Popup, Source, Layer, useMap } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css'; // required once per entry-point that uses <Map>
```

## useMap() pattern
Inside any component that is a direct child of `<Map>`, use:
```ts
const { current: mapRef } = useMap(); // innermost Map's ref
const map = mapRef?.getMap(); // underlying mapboxgl.Map instance
```

## Token
`VITE_MAPBOX_TOKEN` (not `VITE_GOOGLE_MAPS_KEY`). Without it, `<MapContainer>` renders a Portuguese "Token not configured" placeholder instead of the map.

## Drawing
Custom freehand drawing via `map.on('mousedown/mousemove/mouseup', ...)` on the `mapboxgl.Map` instance. `DrawingLayer.tsx` lives inside `<Map>` context.

## Polygon filtering
`turf.booleanPointInPolygon(turf.point([lng, lat]), polygon as any)` — `@turf/turf` v7 does not export `Feature`/`Polygon` types at top level; cast to `any`.

## Layers
- Traffic: declarative `<Source url="mapbox://mapbox.mapbox-traffic-v1"><Layer source-layer="traffic">` with visibility toggle
- Cycling/Transit: imperative `map.setLayoutProperty(id, 'visibility', ...)` on existing style layers with `map.isStyleLoaded()` guard

## Nearby places
Overpass API (`https://overpass-api.de/api/interpreter`) with Amenity tag queries — no API key needed.

**Why:** Google Maps API had billing requirements and the spec explicitly called for this migration.
