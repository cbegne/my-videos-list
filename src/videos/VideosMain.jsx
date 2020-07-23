import React, { useContext } from "react";
import { Flex, Divider, Stack } from "@chakra-ui/core";
import { VideosSummary } from "./summary/VideosSummary";
import { VideosList } from "./presentation/VideosList";
import { VideosAdd } from "./add/VideosAdd";
import { VideosContext } from "./VideosContext";
import { VideosDetails } from "./presentation/VideosDetails";

export const VideosMain = () => {
  const { detailsId } = useContext(VideosContext);

  return (
    <Flex my={5}>
      <VideosSummary />
      <Stack ml={5} w="100%" spacing={8}>
        {detailsId ? <VideosDetails id={detailsId} /> : <VideosList />}
        <Divider />
        <VideosAdd />
      </Stack>
    </Flex>
  );
};
