import React from "react";
import { Flex } from "@chakra-ui/core";
import { Summary } from "./Summary";
import { Presentation } from "./Presentation";

export const VideosApp = () => {
  return (
    <Flex my={5}>
      <Summary />
      <Presentation />
    </Flex>
  );
};
