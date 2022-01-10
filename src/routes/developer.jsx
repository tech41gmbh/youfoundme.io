/** @format */
import React, { useEffect, useState } from 'react';
import '../App.css';
import {
  useColorMode,
  useMediaQuery,
  Link,
  Text,
  Heading,
  VStack,
  Button,
  IconButton,
  Box,
  ChakraProvider,
  extendTheme,
  HStack,
  Image,
  Table,
  Tr,
  Td,
  Menu as CHAKRAMENU,
  MenuButton as CHAKRAMENUButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Portal,
  Flex,
  useDisclosure,
  Stack,
  Component,
  Head,
  Container,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  PhoneIcon,
  WarningIcon,
  EditIcon,
  RepeatIcon,
  CloseIcon,
} from '@chakra-ui/icons';

export default function Developer() {
  useEffect(() => {});
  return (
    <Flex>
      <center>
        <Heading>Developer</Heading>

        <Container>
          Coming soon:
          <br />
          <br />
          <Text>Public Youfoundme API</Text>
          <Text>W3C DID Resolver </Text>
          <Text>oAuth2 plugin </Text>
          <Text>Unity plugin </Text>
          <Text>Youfoundme Oracle</Text>
        </Container>
      </center>
    </Flex>
  );
}
