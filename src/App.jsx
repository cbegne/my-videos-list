import React from "react";
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { VideosMain } from "./videos/VideosMain";
import { VideosProvider } from "./videos/VideosContext";
import { OneVideoProvider } from "./videos/OneVideoContext";

export const App = () => {
  return (
    <ThemeProvider>
      <VideosProvider>
        <OneVideoProvider>
          <CSSReset />
          <Box height={"100vh"} mx="300px">
            <Header />
            <VideosMain />
            <Footer />
          </Box>
        </OneVideoProvider>
      </VideosProvider>
    </ThemeProvider>
  );
};
