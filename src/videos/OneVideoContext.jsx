import React, { useState } from "react";
import { useVideos } from "./useVideos";

export const VideoInfosContext = React.createContext();
export const VideoIdContext = React.createContext();

export const OneVideoProvider = ({ children }) => {
  const { fetchOneVideo } = useVideos();
  const [infos, setInfos] = useState(null);
  const [videoId, setVideoId] = useState(null);

  const fetchOneVideoInfos = async (id) => {
    const infosFetched = await fetchOneVideo(id);
    setInfos(infosFetched);
  };

  return (
    <VideoInfosContext.Provider value={{ infos, fetchOneVideoInfos }}>
      <VideoIdContext.Provider value={{ videoId, setVideoId }}>
        {children}
      </VideoIdContext.Provider>
    </VideoInfosContext.Provider>
  );
};
