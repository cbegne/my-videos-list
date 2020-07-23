import React, { useState, useEffect } from "react";
import { useVideos } from "./useVideos";

export const OneVideoContext = React.createContext({
  infos: null,
  fetchInfos: () => {},
});

export const OneVideoProvider = ({ children }) => {
  const { fetchOneVideo } = useVideos();
  const [infos, setInfos] = useState(null);
  const [videoId, setVideoId] = useState(null);

  const fetchOneVideoInfos = async (id) => {
    const infosFetched = await fetchOneVideo(id);
    setInfos(infosFetched);
  };

  useEffect(() => {
    if (videoId) {
      const id = videoId;
      fetchOneVideoInfos(id);
    }
  }, [videoId]);

  return (
    <OneVideoContext.Provider
      value={{ infos, fetchOneVideoInfos, videoId, setVideoId }}
    >
      {children}
    </OneVideoContext.Provider>
  );
};
