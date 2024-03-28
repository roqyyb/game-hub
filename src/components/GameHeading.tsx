import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import platforms from "../data/platforms";
import genres from "../data/genres";
import usePlatforms from "../hooks/usePlatorms";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const { data: platforms } = usePlatforms();
  const selectedPlatform = platforms?.results.find(
    (p) => p.id === gameQuery.platformID
  );

  const selectedGenre = genres.find((genre) => genre.id === gameQuery.genreID);

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
