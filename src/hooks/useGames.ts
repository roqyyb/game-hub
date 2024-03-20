import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatorms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            search: gameQuery.searchText,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            genres: gameQuery.genre?.id,
          },
        })
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 100, //24h
  });

export default useGames;
