import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GamecardContainer from "./GamecardContainer";
import { GameQuery } from "../App";

interface Props {
  gamequery: GameQuery;
}

const GameGrid = ({ gamequery }: Props) => {
  const { data, error, isLoading } = useGames(gamequery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GamecardContainer key={skeleton}>
            <GameCardSkeleton />
          </GamecardContainer>
        ))}

      {data?.results.map((game) => (
        <GamecardContainer key={game.id}>
          <GameCard game={game} />
        </GamecardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
