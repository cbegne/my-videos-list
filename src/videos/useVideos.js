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

  const updateVideo = ({ id, data }) => {
    fetch(`/videos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const fetchVideos = async () => {
    const response = await fetch("/videos", { method: "GET" });
    return response.json();
  };

  const fetchOneVideo = async (id) => {
    const response = await fetch(`/videos/${id}`, { method: "GET" });
    return response.json();
  };

  return { createVideo, deleteVideo, fetchVideos, fetchOneVideo, updateVideo };
};
