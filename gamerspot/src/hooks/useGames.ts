import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient from "../services/api-client"; 
import { Platform } from "./usePlatform";

const apiClient = new APIClient<Game>('/games')

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gamequery: GameQuery) =>

  useQuery({
    queryKey:['games',gamequery],
    queryFn:()=>apiClient.getAll({
      params:{
        genres: gamequery.genre?.id,
        parent_platforms: gamequery.platform?.id,
        ordering: gamequery.sortOrder,
        search: gamequery.searchText,
      }
    })
  })
  

export default useGames;
