import React, { useContext } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import { VideosContext } from "../VideosContext";
import { useVideos } from "../useVideos";
import { Title } from "../components/Title";

export const VideosAdd = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const { fetchList } = useContext(VideosContext);
  const { createVideo } = useVideos();

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
    <>
      <Title>Add a new video</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            type="text"
            name="title"
            ref={register({ required: true })}
          ></Input>
          <FormLabel htmlFor="link">Link</FormLabel>
          <Input
            type="text"
            name="link"
            ref={register({ required: true })}
          ></Input>
          <FormLabel htmlFor="content">Content</FormLabel>
          <Textarea
            size="md"
            name="content"
            ref={register({ required: true })}
            minHeight="120px"
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
    </>
  );
};
