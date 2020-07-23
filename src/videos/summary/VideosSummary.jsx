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
} from "@chakra-ui/core";
import { VideosContext } from "../VideosContext";
import { SummaryTitle } from "../components/Title";

export const VideosSummary = () => {
  const [textSearch, setTextSearch] = useState("");
  const { list, isLoading } = useContext(VideosContext);

  const changeText = (event) => {
    const text = event.target.value;
    setTextSearch(text);
  };

  const findVideos = (event) => {
    event.preventDefault();
    console.log("do it ", textSearch);
  };

  return (
    <>
      <Stack w="300px" h="100%" mr={5} spacing={8}>
        <Box>
          <SummaryTitle isLoading={isLoading} />
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
      <Divider
        orientation="vertical"
        borderColor="gray.300"
        borderWidth="3px"
      />
    </>
  );
};
