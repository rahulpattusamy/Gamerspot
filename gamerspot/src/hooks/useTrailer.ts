import { useQuery } from '@tanstack/react-query';
import Trailer from '../entities/Trailer';
import apiClient from '../services/api-client';

const useTrailers = (gameId: number) => {
  const apiclient = new apiClient<Trailer>(
    `/games/${gameId}/movies`
  );

  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: apiclient.getAll,
  });
};

export default useTrailers;