import React, { useEffect, useState } from "react";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Divider,
  Stack,
  Heading,
  Icon,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/core";

export const Summary = () => {
  const [total, setTotal] = useState(null);
  const [textSearch, setTextSearch] = useState("");

  useEffect(() => {
    fetch("/videos", { method: "GET" })
      .then((res) => res.json())
      .then((res) => setTotal(res.length));
  }, []);

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
          <Heading size="md" mb={1}>
            All my videos
          </Heading>
          <Box>Total : {total}</Box>
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
