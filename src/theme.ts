import { extendTheme } from "@chakra-ui/react";

const config = {
  initialTheme: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;
