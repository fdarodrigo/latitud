export type PropertyType = "apartment" | "house" | "commercial" | "office";
export type TransactionType = "rent" | "sale";

export interface Listing {
  id: string;
  title: string;
  type: PropertyType;
  transactionType: TransactionType;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  parkingSpots: number;
  hasElevator: boolean;
  hasGrill: boolean;
  hasPool: boolean;
  hasGym: boolean;
  photos: string[];
  coordinates: { lat: number; lng: number };
  address: string;
}

type NeighborhoodProfile = {
  name: string;
  zone: "noble" | "central" | "outer";
  center: { lat: number; lng: number };
  streets: string[];
};

const APARTMENT_PHOTOS = [
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
  "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
];

const HOUSE_PHOTOS = [
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
];

const COMMERCIAL_PHOTOS = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
];

const OFFICE_PHOTOS = [
  "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800",
  "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800",
  "https://images.unsplash.com/photo-1577412647305-991150c7d163?w=800",
];

const nobleNeighborhoods: NeighborhoodProfile[] = [
  {
    name: "Meireles",
    zone: "noble",
    center: { lat: -3.7288, lng: -38.5058 },
    streets: ["Av. Beira Mar", "Rua Joaquim Nabuco", "Rua Canuto de Aguiar"],
  },
  {
    name: "Mucuripe",
    zone: "noble",
    center: { lat: -3.7217, lng: -38.4878 },
    streets: ["Av. Beira Mar", "Rua Senador Machado", "Rua da Paz"],
  },
  {
    name: "Aldeota",
    zone: "noble",
    center: { lat: -3.7395, lng: -38.5098 },
    streets: ["Av. Santos Dumont", "Rua Osvaldo Cruz", "Rua Barbosa de Freitas"],
  },
  {
    name: "Varjota",
    zone: "noble",
    center: { lat: -3.7332, lng: -38.4925 },
    streets: ["Rua Frei Mansueto", "Rua Ana Bilhar", "Rua Delmiro Gouveia"],
  },
  {
    name: "Cocó",
    zone: "noble",
    center: { lat: -3.7488, lng: -38.4828 },
    streets: ["Av. Engenheiro Santana Júnior", "Rua Bento Albuquerque", "Rua Andrade Furtado"],
  },
  {
    name: "Guararapes",
    zone: "noble",
    center: { lat: -3.7596, lng: -38.4897 },
    streets: ["Av. Washington Soares", "Rua Professor Jacinto Botelho", "Rua Gilberto Studart"],
  },
  {
    name: "Dunas",
    zone: "noble",
    center: { lat: -3.7402, lng: -38.4558 },
    streets: ["Av. Dioguinho", "Rua Andrade Furtado", "Av. Zezé Diogo"],
  },
  {
    name: "Edson Queiroz",
    zone: "noble",
    center: { lat: -3.7692, lng: -38.4798 },
    streets: ["Av. Washington Soares", "Rua Hill de Moraes", "Rua Caio Cid"],
  },
  {
    name: "Papicu",
    zone: "noble",
    center: { lat: -3.7408, lng: -38.4747 },
    streets: ["Rua Pereira de Miranda", "Av. Santos Dumont", "Rua Desembargador Lauro Nogueira"],
  },
];

const centralNeighborhoods: NeighborhoodProfile[] = [
  {
    name: "Centro",
    zone: "central",
    center: { lat: -3.7272, lng: -38.5354 },
    streets: ["Rua Major Facundo", "Rua Barão do Rio Branco", "Rua Floriano Peixoto"],
  },
  {
    name: "Praia de Iracema",
    zone: "central",
    center: { lat: -3.7196, lng: -38.5159 },
    streets: ["Av. Historiador Raimundo Girão", "Rua dos Tabajaras", "Rua Dragão do Mar"],
  },
  {
    name: "Fátima",
    zone: "central",
    center: { lat: -3.7502, lng: -38.5275 },
    streets: ["Av. Treze de Maio", "Rua Dom Sebastião Leme", "Rua Soriano Albuquerque"],
  },
  {
    name: "Benfica",
    zone: "central",
    center: { lat: -3.7424, lng: -38.5379 },
    streets: ["Av. da Universidade", "Rua Waldery Uchoa", "Rua Paulino Nogueira"],
  },
  {
    name: "Joaquim Távora",
    zone: "central",
    center: { lat: -3.7482, lng: -38.5139 },
    streets: ["Av. Pontes Vieira", "Rua Fiscal Vieira", "Rua Monsenhor Bruno"],
  },
  {
    name: "Dionísio Torres",
    zone: "central",
    center: { lat: -3.7535, lng: -38.5057 },
    streets: ["Av. Antônio Sales", "Rua Carolina Sucupira", "Rua Tibúrcio Cavalcante"],
  },
];

const outerNeighborhoods: NeighborhoodProfile[] = [
  {
    name: "Messejana",
    zone: "outer",
    center: { lat: -3.8314, lng: -38.4926 },
    streets: ["Av. Frei Cirilo", "Rua Padre Pedro de Alencar", "Av. Jornalista Tomaz Coelho"],
  },
  {
    name: "Cambeba",
    zone: "outer",
    center: { lat: -3.8056, lng: -38.4898 },
    streets: ["Av. Ministro José Américo", "Rua Professora Heloísa Ferreira", "Av. Viena Weyne"],
  },
  {
    name: "Maraponga",
    zone: "outer",
    center: { lat: -3.7867, lng: -38.5711 },
    streets: ["Av. Godofredo Maciel", "Rua Holanda", "Rua Áustria"],
  },
  {
    name: "Passaré",
    zone: "outer",
    center: { lat: -3.8086, lng: -38.5279 },
    streets: ["Av. Juscelino Kubitschek", "Rua das Oiticicas", "Rua Betel"],
  },
  {
    name: "Mondubim",
    zone: "outer",
    center: { lat: -3.8068, lng: -38.5897 },
    streets: ["Av. Godofredo Maciel", "Rua Manoel Sátiro", "Rua Cel. João Correia"],
  },
  {
    name: "Barra do Ceará",
    zone: "outer",
    center: { lat: -3.7089, lng: -38.5866 },
    streets: ["Av. Leste Oeste", "Rua Graça Aranha", "Av. Francisco Sá"],
  },
  {
    name: "José Walter",
    zone: "outer",
    center: { lat: -3.8312, lng: -38.5539 },
    streets: ["Av. João de Araújo Lima", "Rua 33", "Av. Presidente Costa e Silva"],
  },
];

const neighborhoodPlan: NeighborhoodProfile[] = [
  ...Array.from({ length: 46 }, (_, index) => nobleNeighborhoods[index % nobleNeighborhoods.length]),
  ...Array.from({ length: 18 }, (_, index) => centralNeighborhoods[index % centralNeighborhoods.length]),
  ...Array.from({ length: 8 }, (_, index) => outerNeighborhoods[index % outerNeighborhoods.length]),
];

function getPropertyType(profile: NeighborhoodProfile, index: number): PropertyType {
  if (profile.zone === "noble") {
    return index % 9 === 0 ? "house" : index % 7 === 0 ? "office" : "apartment";
  }
  if (profile.zone === "central") {
    return index % 4 === 0 ? "commercial" : index % 3 === 0 ? "office" : "apartment";
  }
  return index % 3 === 0 ? "house" : index % 5 === 0 ? "commercial" : "apartment";
}

function getTransactionType(profile: NeighborhoodProfile, index: number): TransactionType {
  if (profile.zone === "noble") return index % 3 === 0 ? "sale" : "rent";
  if (profile.zone === "central") return index % 4 === 0 ? "sale" : "rent";
  return index % 2 === 0 ? "sale" : "rent";
}

function getPhotos(type: PropertyType): string[] {
  if (type === "house") return HOUSE_PHOTOS;
  if (type === "commercial") return COMMERCIAL_PHOTOS;
  if (type === "office") return OFFICE_PHOTOS;
  return APARTMENT_PHOTOS;
}

function getTitle(type: PropertyType, transactionType: TransactionType, neighborhood: string): string {
  if (type === "office") return `Escritório ${transactionType === "rent" ? "para aluguel" : "à venda"} no ${neighborhood}`;
  if (type === "commercial") return `Ponto comercial ${transactionType === "rent" ? "para aluguel" : "à venda"} no ${neighborhood}`;
  if (type === "house") return `Casa ${transactionType === "rent" ? "para aluguel" : "à venda"} no ${neighborhood}`;
  return `Apartamento ${transactionType === "rent" ? "para aluguel" : "à venda"} no ${neighborhood}`;
}

function getArea(type: PropertyType, profile: NeighborhoodProfile, index: number): number {
  if (type === "office") return 45 + ((index * 17) % 210);
  if (type === "commercial") return 38 + ((index * 19) % 180);
  if (type === "house") return profile.zone === "noble" ? 180 + ((index * 23) % 260) : 90 + ((index * 29) % 170);
  return profile.zone === "noble" ? 48 + ((index * 13) % 210) : 42 + ((index * 11) % 120);
}

function getPrice(
  type: PropertyType,
  transactionType: TransactionType,
  profile: NeighborhoodProfile,
  area: number,
  index: number,
): number {
  const saleByZone = { noble: 9800, central: 6500, outer: 4200 };
  const rentByZone = { noble: 42, central: 31, outer: 22 };
  const typeMultiplier = type === "house" ? 1.18 : type === "office" ? 1.08 : type === "commercial" ? 1.12 : 1;
  const variation = 0.88 + ((index % 7) * 0.045);
  const base = transactionType === "sale" ? saleByZone[profile.zone] : rentByZone[profile.zone];
  const rawPrice = area * base * typeMultiplier * variation;
  return transactionType === "sale"
    ? Math.round(rawPrice / 10000) * 10000
    : Math.round(rawPrice / 100) * 100;
}

function getCoordinates(profile: NeighborhoodProfile, index: number): { lat: number; lng: number } {
  const latOffset = (((index * 37) % 13) - 6) * 0.0012;
  const lngOffset = (((index * 29) % 15) - 7) * 0.0012;
  return {
    lat: Number((profile.center.lat + latOffset).toFixed(6)),
    lng: Number((profile.center.lng + lngOffset).toFixed(6)),
  };
}

function createListing(profile: NeighborhoodProfile, index: number): Listing {
  const id = String(index + 1);
  const type = getPropertyType(profile, index);
  const transactionType = getTransactionType(profile, index);
  const area = getArea(type, profile, index);
  const bedrooms = type === "apartment" || type === "house" ? Math.max(1, 1 + ((index + 1) % 5)) : 0;
  const bathrooms = type === "office" || type === "commercial" ? 1 + (index % 3) : Math.max(1, bedrooms - 1 + (index % 2));
  const parkingSpots = type === "office" ? 1 + (index % 6) : type === "commercial" ? index % 4 : profile.zone === "outer" ? index % 3 : 1 + (index % 4);
  const street = profile.streets[index % profile.streets.length];

  return {
    id,
    title: getTitle(type, transactionType, profile.name),
    type,
    transactionType,
    price: getPrice(type, transactionType, profile, area, index),
    area,
    bedrooms,
    bathrooms,
    parkingSpots,
    hasElevator: type !== "house" && profile.zone !== "outer",
    hasGrill: type === "house" || (type === "apartment" && index % 3 === 0),
    hasPool: type !== "commercial" && type !== "office" && (profile.zone === "noble" || index % 4 === 0),
    hasGym: type !== "house" && type !== "commercial" && (profile.zone === "noble" || index % 5 === 0),
    photos: getPhotos(type),
    coordinates: getCoordinates(profile, index),
    address: `${street}, ${120 + index * 17} - ${profile.name}, Fortaleza`,
  };
}

export const mockListings: Listing[] = neighborhoodPlan.map(createListing);
