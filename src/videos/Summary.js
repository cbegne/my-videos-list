import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/core";

export const Summary = () => {
  const [total, setTotal] = useState();

  useEffect(() => {
    fetch("/videos", { method: "GET" })
      .then((res) => res.json())
      .then((res) => setTotal(res.length));
  }, []);

  return (
    <Box w="300px" h="100%" borderRight="2px" borderColor="gray.300">
      <Box>Mes vidéos</Box>
      <Box>Total : {total}</Box>
    </Box>
  );
};
