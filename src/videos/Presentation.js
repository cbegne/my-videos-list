import React, { useContext } from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  Text,
  ListIcon,
  Heading,
  Stack,
  Tag,
  Link,
} from "@chakra-ui/core";
import { VideosContext } from "./VideosContext";
import { AddVideo } from "./AddVideo";
import { useDeleteVideo } from "./useDeleteVideo";

export const Presentation = () => {
  const { list, isLoading } = useContext(VideosContext);
  const { fetchList } = useContext(VideosContext);
  const { deleteVideo } = useDeleteVideo();

  const handleDelete = async (event) => {
    const { id } = event.target.dataset;
    await deleteVideo(id);
    fetchList();
  };

  return (
    <Stack ml={5} w="100%" spacing={8}>
      <Box>
        <Heading size="md" mb={1}>
          My list{" "}
          {isLoading && (
            <Text as="span" fontSize="xs">
              ...is loading
            </Text>
          )}
        </Heading>
        <List>
          {list.map(({ title, id }) => (
            <ListItem key={id}>
              <ListIcon icon="chevron-right" color="green.500" size="24px" />
              <Link as="Button">{title}</Link>
              <Tag
                as="button"
                size="sm"
                ml={2}
                data-id={id}
                onClick={handleDelete}
              >
                Delete
              </Tag>
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider />
      <AddVideo />
    </Stack>
  );
};
