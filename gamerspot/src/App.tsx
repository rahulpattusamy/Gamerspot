import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
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
        base: "1fr",
        lg: "180px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gamequery, searchText })}
        />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedgenreId={gamequery.genreId}
            onSelectegenre={(genre) =>
              setGameQuery({ ...gamequery, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box>
          <GameHeading gamequery={gamequery} />
        </Box>

        <Flex marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector
              selectedPlatformId={gamequery.platformId}
              Onselecteplatfrom={(platform) =>
                setGameQuery({ ...gamequery, platformId: platform.id })
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
