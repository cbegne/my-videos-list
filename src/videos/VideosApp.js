import React from "react";
import { Flex, Divider, Stack } from "@chakra-ui/core";
import { Summary } from "./Summary";
import { Presentation } from "./Presentation";
import { VideoAdd } from "./VideoAdd";

export const VideosApp = () => {
  return (
    <Flex my={5}>
      <Summary />
      <Stack ml={5} w="100%" spacing={8}>
        <Presentation />
        <Divider />
        <VideoAdd />
      </Stack>
    </Flex>
  );
};
