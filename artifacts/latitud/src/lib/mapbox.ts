export const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN as string | undefined;

export const MAP_STYLE = "mapbox://styles/mapbox/streets-v12";
export const HERO_MAP_STYLE = "mapbox://styles/mapbox/dark-v11";

export const FORTALEZA_CENTER = {
  longitude: -38.504,
  latitude: -3.7318,
  zoom: 13,
} as const;
