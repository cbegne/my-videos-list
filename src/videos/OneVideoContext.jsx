import React, { useState } from "react";
import { useVideos } from "./useVideos";

export const OneVideoContext = React.createContext();

export const OneVideoProvider = ({ children }) => {
  const { fetchOneVideo } = useVideos();
  const [infos, setInfos] = useState(null);
  const [videoId, setVideoId] = useState(null);

  const fetchOneVideoInfos = async (id) => {
    const infosFetched = await fetchOneVideo(id);
    setInfos(infosFetched);
  };

  return (
    <OneVideoContext.Provider
      value={{ infos, fetchOneVideoInfos, videoId, setVideoId }}
    >
      {children}
    </OneVideoContext.Provider>
  );
};
