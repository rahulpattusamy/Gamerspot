import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid templateAreas={{ base: `"nav main"`, lg: `"nav nav" "aside main"` }}>
      <GridItem area="nav">coral</GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>

      <GridItem area="main">Main</GridItem>
    </Grid>
  );
};

export default App;
