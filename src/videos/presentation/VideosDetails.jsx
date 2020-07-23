import React, { useContext } from "react";
import { Box, Text, Link, Icon, Stack } from "@chakra-ui/core";
import { Title } from "../components/Title";
import { OneVideoContext } from "../OneVideoContext";

export const VideosDetails = ({ id }) => {
  const { infos } = useContext(OneVideoContext);

  if (!infos) return <Text>My content ...is loading</Text>;

  const { title, content, link } = infos;
  return (
    <Stack spacing={8}>
      <Title>{title}</Title>
      <Box>{content}</Box>
      <Link href={link} isExternal color="teal.500">
        Watch the video <Icon name="external-link" mx="2px" />
      </Link>
    </Stack>
  );
};
