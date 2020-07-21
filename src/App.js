import React from "react";
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { VideosApp } from "./videos/VideosApp";
import { VideosProvider } from "./videos/VideosContext";

export const App = () => {
  return (
    <ThemeProvider>
      <VideosProvider>
        <CSSReset />
        <Box height={"100vh"} mx="300px">
          <Header />
          <VideosApp />
          <Footer />
        </Box>
      </VideosProvider>
    </ThemeProvider>
  );
};
