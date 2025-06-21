import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const Errorpage = () => {
  const error = useRouteError();
  return (
    <>
    <NavBar/>
      <Heading>Oops</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This page does not exist."
          : "An unexpected error is occured."}
      </Text>
    </>
  );
};

export default Errorpage;
