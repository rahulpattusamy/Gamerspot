import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import apiClient from "../services/api-client";
import useGameQueryStore from "../store";

const apiclient = new apiClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  slug:string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  description_raw:string;
  rating_top: number;
}

const useGames = () =>{
const gamequery = useGameQueryStore(s=>s.gameQuery)
 return useInfiniteQuery({
    queryKey: ["games", gamequery],
    queryFn: ({ pageParam = 1 }) =>
      apiclient.getAll({
        params: {
          genres: gamequery.genreId,
          parent_platforms: gamequery.platformId,
          ordering: gamequery.sortOrder,
          search: gamequery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
}
  

export default useGames;
