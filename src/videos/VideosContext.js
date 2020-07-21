import React, { useState, useEffect } from "react";

export const VideosContext = React.createContext({
  list: [],
  isLoading: false,
  fetchList: () => {},
});

export const VideosProvider = ({ children }) => {
  const [list, setlist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = () => {
    setIsLoading(true);
    fetch("/videos", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        setlist(res);
        setIsLoading(false);
      });
  };

  return (
    <VideosContext.Provider value={{ isLoading, list, fetchList }}>
      {children}
    </VideosContext.Provider>
  );
};
