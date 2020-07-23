import React, { useContext } from "react";
import {
  List,
  ListItem,
  Text,
  ListIcon,
  Heading,
  Tag,
  Link,
} from "@chakra-ui/core";
import { VideosContext } from "./VideosContext";
import { useVideos } from "./useVideos";

export const Presentation = () => {
  const { list, isLoading } = useContext(VideosContext);
  const { fetchList } = useContext(VideosContext);
  const { deleteVideo } = useVideos();

  const handleDelete = async (event) => {
    const { id } = event.target.dataset;
    await deleteVideo(id);
    fetchList();
  };

  const switchToDetails = () => {
    // switch
  };

  return (
    <>
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
            <Link as="button" onClick={switchToDetails}>
              {title}
            </Link>
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
    </>
  );
};
