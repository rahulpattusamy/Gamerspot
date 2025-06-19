import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/api-client";
import Platform from "../data/Platform";
import ms from 'ms'

const apiclient = new apiClient<Platform>("/platforms/lists/parents")

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>apiclient.getAll(),
    initialData:Platform,
    staleTime: ms('240h'),
    
  });

export default usePlatforms;
