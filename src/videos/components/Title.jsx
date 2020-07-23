import React from "react";
import { Heading, Text } from "@chakra-ui/core";

export const Title = ({ children }) => (
  <Heading size="md" mb={1}>
    {children}
  </Heading>
);

export const PresentationTitle = ({ isLoading }) => (
  <Title>
    My list{" "}
    {isLoading && (
      <Text as="span" fontSize="xs">
        ...is loading
      </Text>
    )}
  </Title>
);

export const SummaryTitle = ({ isLoading }) => (
  <Title>
    All my videos{" "}
    {isLoading && (
      <Text as="span" fontSize="xs">
        ...are loading
      </Text>
    )}
  </Title>
);
