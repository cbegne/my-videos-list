export const useCreateVideo = () => {
  const createVideo = (data) => {
    fetch("/videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return { createVideo };
};
