import React, { useState } from "react";
import { useVideos } from "./useVideos";

export const VideosContext = React.createContext();

export const VideosProvider = ({ children }) => {
  const { fetchVideos } = useVideos();
  const [list, setlist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchList = async () => {
    setIsLoading(true);
    const listFetched = await fetchVideos();
    setlist(listFetched);
    setIsLoading(false);
  };

  return (
    <VideosContext.Provider value={{ isLoading, list, fetchList }}>
      {children}
    </VideosContext.Provider>
  );
};
