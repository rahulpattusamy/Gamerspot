import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {

const[gamequery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  return (
    <Grid
      templateAreas={{ base: `"nav main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedgenre={gamequery.genre}
            onSelectegenre={(genre) => setGameQuery({...gamequery, genre})}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <HStack marginBottom={5} spacing={5}>
        <PlatformSelector
          selectedPlatform={gamequery.platform}
          Onselecteplatfrom={(platform) => setGameQuery({...gamequery, platform})}
        />
        <SortSelector/>
        </HStack>
      
        <GameGrid
         gamequery={gamequery}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
