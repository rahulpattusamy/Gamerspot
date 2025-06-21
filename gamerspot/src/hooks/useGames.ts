import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";


const apiclient = new apiClient<Game>("/games");

const useGames = () => {
  const gamequery = useGameQueryStore((s) => s.gameQuery);
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
};

export default useGames;
