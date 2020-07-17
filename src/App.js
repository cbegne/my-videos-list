import React from "react";
import { ThemeProvider, CSSReset, Box, Flex } from "@chakra-ui/core";
import { Header } from "./Header";
import { Summary } from "./Summary";
import { Presentation } from "./Presentation";
import { Footer } from "./Footer";

export const App = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Box height={"100vh"} mx="300px">
        <Header />
        <Flex my={5}>
          <Summary />
          <Presentation />
        </Flex>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};
