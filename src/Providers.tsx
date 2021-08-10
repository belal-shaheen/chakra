import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

const Providers: React.FC = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Providers;
