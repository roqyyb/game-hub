import { Heading } from "@chakra-ui/react";
import useGenreLookUp from "../hooks/useGenreLookUp";
import usePlatformLookUp from "../hooks/usePlatformLookUp";
import useGameQueryStore from "../store";

function GameHeading() {
  const genreID = useGameQueryStore((s) => s.gameQuery.genreID);
  const selectedGenre = useGenreLookUp(genreID);

  const platformID = useGameQueryStore((s) => s.gameQuery.platformID);
  const selectedPlatform = usePlatformLookUp(platformID);

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;
  return (
    <Heading fontSize="5xl" marginY={5} as="h1">
      {heading}
    </Heading>
  );
}

export default GameHeading;
