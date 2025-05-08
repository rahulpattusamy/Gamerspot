import { Box, Flex, Grid, GridItem,  Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform"
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;

}

const App = () => {
  const [gamequery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
    templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`,
    }}
    templateColumns={{
      base: '1fr',
      lg: '250px 1fr'
    }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText) => setGameQuery({ ...gamequery, searchText })} />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedgenre={gamequery.genre}
            onSelectegenre={(genre) => setGameQuery({ ...gamequery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem area="main">

        <Box>
          <GameHeading gamequery={gamequery}/>
        </Box>


        <Flex marginBottom={5}>
          <Box marginRight={5}>
          <PlatformSelector
            selectedPlatform={gamequery.platform}
            Onselecteplatfrom={(platform) =>
              setGameQuery({ ...gamequery, platform })
            }
          />
          </Box>
          
          <SortSelector
            sortOrders={gamequery.sortOrder}
            Onselectsortorder={(sortOrder) =>
              setGameQuery({ ...gamequery, sortOrder })
            }
          />
        </Flex>

        <GameGrid gamequery={gamequery} />
      </GridItem>
    </Grid>
  );
};

export default App;
