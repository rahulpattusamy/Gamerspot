import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import genres from "../data/genres";
import ms from 'ms'
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
    staleTime:ms('240h'),
  });

export default useGenres;
