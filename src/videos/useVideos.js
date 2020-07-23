export const useVideos = () => {
  const createVideo = (data) => {
    fetch("/videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const deleteVideo = (id) => {
    fetch(`/videos/${id}`, {
      method: "DELETE",
    });
  };

  const fetchVideos = async () => {
    const response = await fetch("/videos", { method: "GET" });
    return response.json();
  };

  return { createVideo, deleteVideo, fetchVideos };
};
