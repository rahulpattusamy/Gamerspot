import { useQuery } from "@tanstack/react-query";
import Platform from "../data/Platform";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 92 * 60 * 60 * 1000,
    initialData:{count:Platform.length, results:Platform}
  });

export default usePlatform;
