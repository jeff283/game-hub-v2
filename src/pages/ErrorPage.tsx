import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  const errorType = isRouteErrorResponse(error);
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops...</Heading>
        <Text>
          {errorType
            ? "Sorry, This page does not exist."
            : "Sorry, an unexpected error has occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
