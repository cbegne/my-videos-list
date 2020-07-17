import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListIcon,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  FormErrorMessage,
  Stack,
  Button,
} from "@chakra-ui/core";
import { useForm } from "react-hook-form";

export const Presentation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  const [list, setlist] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("/videos", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        setlist(res);
        setIsLoading(false);
      });
  }, []);

  return (
    <Stack ml={5} w="100%" spacing={8}>
      <Box>
        <Heading size="md">My list</Heading>
        <List>
          {list.map(({ title }, index) => (
            <ListItem key={index}>
              <ListIcon icon="chevron-right" color="green.500" size="24px" />
              {title}
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider />
      <Box>
        <Heading size="md">Add a new video</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              type="text"
              id="title"
              ref={register({ required: true })}
            ></Input>
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
            <FormLabel htmlFor="link">Link</FormLabel>
            <Input
              type="text"
              id="link"
              ref={register({ required: true })}
            ></Input>
            <FormLabel htmlFor="content">Content</FormLabel>
            <Textarea
              size="sm"
              id="content"
              ref={register({ required: true })}
            ></Textarea>
          </FormControl>
          <Button
            mt={4}
            variantColor="teal"
            isLoading={formState.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Stack>
  );
};
