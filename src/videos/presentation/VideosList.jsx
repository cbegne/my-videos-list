import React, { useContext } from "react";
import { List, ListItem, ListIcon, Tag, Link } from "@chakra-ui/core";
import { VideosContext } from "../VideosContext";
import { useVideos } from "../useVideos";
import { PresentationTitle } from "../components/Title";

export const VideosList = () => {
  const { list, isLoading, setDetailsId } = useContext(VideosContext);
  const { fetchList } = useContext(VideosContext);
  const { deleteVideo } = useVideos();

  const handleDelete = async (event) => {
    const { id } = event.target.dataset;
    await deleteVideo(id);
    fetchList();
  };

  const switchToPresentation = (event) => {
    const { id } = event.target.dataset;
    setDetailsId(id);
  };

  return (
    <>
      <PresentationTitle isLoading={isLoading} />
      <List>
        {list.map(({ title, id }) => (
          <ListItem key={id}>
            <ListIcon icon="chevron-right" color="green.500" size="24px" />
            <Link as="button" data-id={id} onClick={switchToPresentation}>
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
