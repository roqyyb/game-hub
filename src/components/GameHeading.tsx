import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenreLookUp from "../hooks/useGenreLookUp";
import usePlatformLookUp from "../hooks/usePlatformLookUp";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const selectedPlatform = usePlatformLookUp(gameQuery.platformID);
  const selectedGenre = useGenreLookUp(gameQuery.genreID);

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
