// ./src/hooks/useStarships.ts
import { useQuery } from "@tanstack/react-query";

export async function fetchData() {
  const result = await fetch(`https://rickandmortyapi.com/api/location/`);
  const json = await result.json();
  return json;
}

export function useLocation() {
  return useQuery(["location"], fetchData);
}