import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/api-client";

const apiclient = new apiClient<Platform>("/platforms/lists/parents")

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>apiclient.getAll(),
    staleTime: 192 * 60 * 60 * 1000,
    //initialData:{count:platforms.length, results:platforms,n}
  });

export default usePlatform;
