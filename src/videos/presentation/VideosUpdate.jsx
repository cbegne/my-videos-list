import React, { useContext } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  Button,
} from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import { OneVideoContext } from "../OneVideoContext";
import { useVideos } from "../useVideos";

export const VideosUpdate = () => {
  const { register, handleSubmit, formState } = useForm();
  const { infos, fetchOneVideoInfos } = useContext(OneVideoContext);
  const { updateVideo } = useVideos();

  const onSubmit = async (data) => {
    try {
      console.log(infos.id, data);
      await updateVideo({ id: infos.id, data });
      // fetchOneVideoInfos();
    } catch (err) {
      console.log(err);
    }
  };

  if (!infos) return null;

  const { title, link, content } = infos;

  return (
    <Box>
      <Heading size="md" mb={1}>
        Update the video
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            type="text"
            name="title"
            ref={register({ required: true })}
            defaultValue={title}
          ></Input>
          <FormLabel htmlFor="link">Link</FormLabel>
          <Input
            type="text"
            name="link"
            ref={register({ required: true })}
            defaultValue={link}
          ></Input>
          <FormLabel htmlFor="content">Content</FormLabel>
          <Textarea
            size="md"
            name="content"
            ref={register({ required: true })}
            defaultValue={content}
            minHeight="120px"
          ></Textarea>
        </FormControl>
        <Button
          mt={4}
          variantColor="teal"
          isLoading={formState.isSubmitting}
          type="submit"
        >
          Update
        </Button>
      </form>
    </Box>
  );
};
