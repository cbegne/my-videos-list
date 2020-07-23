import React, { useContext } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  FormErrorMessage,
  Button,
} from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import { VideosContext } from "./VideosContext";
import { useCreateVideo } from "./useCreateVideo";

export const AddVideo = () => {
  const { register, handleSubmit, formState, errors, reset } = useForm();
  const { fetchList } = useContext(VideosContext);
  const { createVideo } = useCreateVideo();

  const onSubmit = async (data) => {
    try {
      await createVideo(data);
      reset({});
      fetchList();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
      <Heading size="md" mb={1}>
        Add a new video
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            type="text"
            name="title"
            ref={register({ required: true })}
          ></Input>
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
          <FormLabel htmlFor="link">Link</FormLabel>
          <Input
            type="text"
            name="link"
            ref={register({ required: true })}
          ></Input>
          <FormLabel htmlFor="content">Content</FormLabel>
          <Textarea
            size="sm"
            name="content"
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
  );
};
