import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import genres from "../data/genres";
const apiclient = new apiClient<Genre>('/genres')

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>  apiclient.getAll(),
    initialData:genres,
    staleTime: 196 * 60 * 60 * 1000,
  });

export default useGenres;
