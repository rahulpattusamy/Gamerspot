import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GamecardContainer from "./GamecardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GamecardContainer>
              <GameCardSkeleton key={skeleton} />
            </GamecardContainer>
          ))}

        {games.map((game) => (
          <GamecardContainer>
            <GameCard game={game} />
          </GamecardContainer>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
