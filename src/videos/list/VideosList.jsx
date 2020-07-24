import React, { useContext } from "react";
import { List, ListItem, ListIcon, Tag, Link } from "@chakra-ui/core";
import { VideosContext } from "../VideosContext";
import { useVideos } from "../useVideos";
import { Title, LoadingText } from "../components/Title";
import { OneVideoContext } from "../OneVideoContext";

export const VideosList = () => {
  const { list, isLoading, fetchList } = useContext(VideosContext);
  const { setVideoId } = useContext(OneVideoContext);
  const { deleteVideo } = useVideos();

  const handleDelete = async (event) => {
    const { id } = event.target.dataset;
    try {
      await deleteVideo(id);
      fetchList();
    } catch (err) {
      console.log(err);
    }
  };

  const switchToPresentation = (event) => {
    const { id } = event.target.dataset;
    setVideoId(id);
  };

  return (
    <>
      <Title>
        My list {isLoading && <LoadingText>...is loading</LoadingText>}
      </Title>
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
