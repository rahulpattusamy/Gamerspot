import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gamequery: GameQuery;
}

const GameHeading = ({ gamequery }: Props) => {
  const genres = useGenre(gamequery.genreId);

  const Platform = usePlatform(gamequery.genreId);

  const heading = `${Platform?.name || ""} ${genres?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
