export const useDeleteVideo = () => {
  const deleteVideo = (id) => {
    fetch(`/videos/${id}`, {
      method: "DELETE",
    });
  };

  return { deleteVideo };
};
