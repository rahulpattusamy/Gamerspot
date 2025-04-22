import { HStack, Img, List, ListItem,  Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8,9,10];
  return (
    <List>
      {isLoading && Skeletons.map(Skeleton=> <ListItem paddingY="5px" key={Skeleton}><GenreSkeleton/></ListItem>)}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Img
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
