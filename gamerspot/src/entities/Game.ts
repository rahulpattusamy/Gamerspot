import { Genre } from "./Genre";
import { Platform } from "./Platform";
import Publisher from "./Publisher";

export interface Game {
  id: number;
  name: string;
  slug: string;
  publishers: Publisher[];
  genres: Genre[];
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  description_raw: string;
  rating_top: number;
}
