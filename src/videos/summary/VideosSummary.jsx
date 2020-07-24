import React, { useState, useContext } from "react";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Divider,
  Stack,
  Icon,
  InputGroup,
  InputLeftElement,
  Link,
  FormErrorMessage,
} from "@chakra-ui/core";
import { VideosContext } from "../VideosContext";
import { Title, LoadingText } from "../components/Title";
import { VideoIdContext } from "../OneVideoContext";

export const VideosSummary = () => {
  const [textSearch, setTextSearch] = useState("");
  const [error, setError] = useState("");
  const { list, isLoading } = useContext(VideosContext);
  const { setVideoId } = useContext(VideoIdContext);

  const changeText = (event) => {
    setError("");
    const text = event.target.value;
    setTextSearch(text);
  };

  const findVideos = (event) => {
    event.preventDefault();
    const id = parseInt(textSearch, 10);
    if (list.find((video) => video.id === id)) {
      setVideoId(id);
    } else {
      setError("Oups... No video with this id.");
    }
  };

  const handleShowList = () => {
    setVideoId(null);
  };

  console.log("ici");

  return (
    <Stack minWidth="300px" h="100%" mr={5} spacing={8}>
      <Box>
        <Title>
          <Link as="button" onClick={handleShowList}>
            All my videos
          </Link>{" "}
          {isLoading && <LoadingText>...are loading</LoadingText>}
        </Title>
        <Box>Total: {list.length}</Box>
      </Box>
      <Divider />
      <form onSubmit={findVideos}>
        <FormControl isInvalid={error}>
          <FormLabel htmlFor="search">Search by number</FormLabel>
          <InputGroup>
            <InputLeftElement
              children={<Icon name="search" color="gray.300" />}
            />
            <Input
              type="text"
              name="search"
              onChange={changeText}
              value={textSearch}
            ></Input>
          </InputGroup>
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
      </form>
    </Stack>
  );
};
