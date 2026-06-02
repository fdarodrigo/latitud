import { useQuery } from "@tanstack/react-query";
import { mockListings, type Listing } from "../mocks/listings.mock";
import { useMapStore } from "@/domains/map/store/map.store";

async function fetchListings(): Promise<Listing[]> {
  await new Promise((r) => setTimeout(r, 400));
  return mockListings;
}

export function useListings() {
  const setAllListings = useMapStore((s) => s.setAllListings);

  return useQuery({
    queryKey: ["listings"],
    queryFn: async () => {
      const data = await fetchListings();
      setAllListings(data);
      return data;
    },
    staleTime: Infinity,
  });
}
