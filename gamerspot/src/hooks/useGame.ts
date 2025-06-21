import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Game } from "../entities/Game";

const apiclient = new apiClient<Game>("/games");
const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiclient.get(slug),
  });

export default useGame;
