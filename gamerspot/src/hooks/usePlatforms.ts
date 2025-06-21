import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import platform from "../data/Platform";
import ms from "ms";
import { Platform } from "../entities/Platform";

const apiclient = new apiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiclient.getAll(),
    initialData: platform,
    staleTime: ms("240h"),
  });

export default usePlatforms;
