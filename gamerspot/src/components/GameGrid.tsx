import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GamecardContainer from "./GamecardContainer";
import { GameQuery } from "../App";
import InfiniteScroll from 'react-infinite-scroll-component';
import React from "react";


interface Props {
  gamequery: GameQuery;
}

const GameGrid = ({ gamequery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gamequery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const fetchedgamescount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    
      
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
          {isLoading &&
            skeletons.map((skeleton) => (
              <GamecardContainer key={skeleton}>
                <GameCardSkeleton />
              </GamecardContainer>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GamecardContainer key={game.id}>
                  <GameCard game={game} />
                </GamecardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      
  );
};

export default GameGrid;
