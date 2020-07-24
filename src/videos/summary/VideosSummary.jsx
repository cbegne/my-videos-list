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
} from "@chakra-ui/core";
import { VideosContext } from "../VideosContext";
import { Title, LoadingText } from "../components/Title";
import { OneVideoContext } from "../OneVideoContext";

export const VideosSummary = () => {
  const [textSearch, setTextSearch] = useState("");
  const { list, isLoading } = useContext(VideosContext);
  const { setVideoId } = useContext(OneVideoContext);

  const changeText = (event) => {
    const text = event.target.value;
    setTextSearch(text);
  };

  const findVideos = (event) => {
    event.preventDefault();
    console.log("do it ", textSearch);
  };

  const handleShowList = () => {
    setVideoId(null);
  };

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
        <FormControl>
          <FormLabel htmlFor="search">Search</FormLabel>
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
        </FormControl>
      </form>
    </Stack>
  );
};
