import React from "react";
import { Heading, Divider } from "@chakra-ui/core";

export const Header = () => {
  return (
    <>
      <Heading as="h1" py={5}>
        Hello, this is my list
      </Heading>
      <Divider borderColor="gray.300" borderWidth="3px" />
    </>
  );
};
