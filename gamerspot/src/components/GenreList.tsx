import { Button, Heading, HStack, Img, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectegenre: (gener: Genre) => void;
  selectedgenre:Genre | null;
}

const GenreList = ({onSelectegenre, selectedgenre}:Props) => {
  const { data, isLoading, error } = useGenres();
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error) return null;
  return (
    <>
    <Heading fontSize={'2xl'} marginBottom={5}>Genres</Heading>
    <List>
      {isLoading &&
        Skeletons.map((Skeleton) => (
          <ListItem paddingY="5px" key={Skeleton}>
            <GenreSkeleton />
          </ListItem>
        ))}
      {data?.results.map((genre:Genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Img
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              whiteSpace={'normal'}
              textAlign={'left'}
              objectFit={'cover'}
              fontWeight={ genre.id === selectedgenre?.id ? 'bold': 'normal'} 
              onClick={() => onSelectegenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
