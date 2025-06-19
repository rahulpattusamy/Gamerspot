import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GamecardContainer = ({ children }: Props) => {
  return (
    <Box px={{base:6, md:2}} borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GamecardContainer;
