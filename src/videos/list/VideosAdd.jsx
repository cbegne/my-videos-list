import React, { useContext } from "react";
import { Button } from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import { VideosContext } from "../VideosContext";
import { useVideos } from "../useVideos";
import { Title } from "../components/Title";
import { VideosForm } from "../components/VideoForm";

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
        <VideosForm register={register} title="" content="" link="" />
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
