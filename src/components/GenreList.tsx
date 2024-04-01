import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGenres, { Genre } from "../hooks/useGenres";
import useGameQueryStore from "../store";

function GenreList() {
  const genreID = useGameQueryStore((s) => s.gameQuery.genreID);
  const setGenreID = useGameQueryStore((s) => s.setGenreID);
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <Heading marginBottom={3} fontSize={"2xl"}>
        Genres
      </Heading>
      <List>
        {data?.results?.map((genre) => (
          <ListItem paddingY="5px" key={genre.id}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit="cover"
              />
              <Button
                fontWeight={genre.id === genreID ? "bold" : "normal"}
                onClick={() => setGenreID(genre.id)}
                variant="link"
                fontSize={"lg"}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
