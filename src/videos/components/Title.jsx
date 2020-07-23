import React from "react";
import { Heading, Text } from "@chakra-ui/core";

export const Title = ({ children }) => (
  <Heading size="md" mb={1}>
    {children}
  </Heading>
);

const LoadingText = ({ children }) => (
  <Text as="span" fontSize="xs">
    {children}
  </Text>
);

export const ListTitle = ({ isLoading }) => (
  <Title>My list {isLoading && <LoadingText>...is loading</LoadingText>}</Title>
);

export const SummaryTitle = ({ isLoading }) => (
  <Title>
    All my videos {isLoading && <LoadingText>...are loading</LoadingText>}
  </Title>
);
