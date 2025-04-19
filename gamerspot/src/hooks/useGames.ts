import { useEffect, useState } from "react";
import apiclient from "../services/apiclient";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  result: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiclient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.result))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
