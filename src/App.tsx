import { Box, Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { Platform } from "./hooks/usePlatorms";

export interface GameQuery {
  genreID: number;
  platformID: number;
  sortOrder: string;
  searchText: string;
  pageSize: 10;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `'nav' "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} area={"aside"}>
          <GenreList
            selectedGenre={gameQuery.genreID}
            onSelectGenre={(genreID) => setGameQuery({ ...gameQuery, genreID })}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box marginLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack marginBottom={5} spacing={4}>
            <PlatformSelector
              selectedPlatformID={gameQuery.platformID}
              onSelectPlatform={(platformID) =>
                setGameQuery({ ...gameQuery, platformID })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSort={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
