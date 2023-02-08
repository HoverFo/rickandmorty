// ./src/hooks/useStarships.ts
import { useQuery } from "@tanstack/react-query";

export async function fetchData() {
  const result = await fetch(`https://rickandmortyapi.com/api/character/`);
  const json = await result.json();
  return json;
}

export function useCharacter() {
  return useQuery(["character"], fetchData);
}