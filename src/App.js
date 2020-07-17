import React from "react";
import HookForm from "./HookForm";
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";

export default function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Box p={4}>
        <HookForm />
      </Box>
    </ThemeProvider>
  );
}
