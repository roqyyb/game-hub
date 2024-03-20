import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient from "../services/api-client";
import { Platform } from "./usePlatorms";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          search: gameQuery.searchText,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          genres: gameQuery.genre?.id,
        },
      }),
    staleTime: 24 * 60 * 60 * 100, //24h
  });

export default useGames;
