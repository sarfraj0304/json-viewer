import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    body: {
      backgroundImage:
        "linear-gradient(60deg, rgba(195,123,34,1) 0%, rgba(178,146,64,1) 17%, rgba(165,84,167,1) 38%, rgba(77,86,207,1) 62%, rgba(131,193,226,1) 82%, rgba(148,203,252,1) 100%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100vh",
      height: "100vh",
      margin: 0,
      padding: 0,
    },
  },
};

export const theme = extendTheme({
  styles,
});
