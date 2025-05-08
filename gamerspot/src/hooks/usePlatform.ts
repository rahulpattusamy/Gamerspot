import { useQuery } from "@tanstack/react-query";
import platforms from "../data/Platform";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient.getAll,
    staleTime: 92 * 60 * 60 * 1000,
    initialData:{count:platforms.length, results:platforms}
  });

export default usePlatform;
