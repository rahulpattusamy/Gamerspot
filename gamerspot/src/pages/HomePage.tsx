import { Grid, Show, GridItem, Box, Flex } from "@chakra-ui/react"
import GameGrid from "../components/GameGrid"
import GameHeading from "../components/GameHeading"
import GenreList from "../components/GenreList"
import PlatformSelector from "../components/PlatformSelector"
import SortSelector from "../components/SortSelector"


const HomePage = () => {
  return (
     <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "180px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList/>
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box>
          <GameHeading/>
        </Box>

        <Flex marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector/>
          </Box>

          <SortSelector/>
        </Flex>

        <GameGrid  />
      </GridItem>
    </Grid>
  )
}

export default HomePage