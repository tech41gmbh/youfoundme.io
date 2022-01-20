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
        <br />

        <Text>Coming soon:</Text>
        <br />
        <Container align="left">
          <ul>
            <li>
              <Text fontSize="2xl">Developer Portal</Text>
            </li>
            <li>
              <Text fontSize="2xl">
                How to query the Youfoundme ERC-721 contract
              </Text>
            </li>
            <li>
              <Text fontSize="2xl">Public Youfoundme API</Text>
            </li>
            <li>
              <Text fontSize="2xl">W3C DID Resolver </Text>
            </li>
            <li>
              <Text fontSize="2xl">Resolve DID On-Chain</Text>
            </li>
            <li>
              <Text fontSize="2xl">Verify signatures On-Chain</Text>
            </li>
            <li>
              <Text fontSize="2xl">oAuth2 plugin </Text>
            </li>
            <li>
              <Text fontSize="2xl">Unity plugin </Text>
            </li>

            <li>
              <Text fontSize="2xl">Chain Bridge</Text>
            </li>
            <li>
              <Text fontSize="2xl">Youfoundme Oracle</Text>
            </li>
          </ul>
          <br />
          <br />
          <br />
          <br />
        </Container>
      </center>
      <br />
      <br />
    </Flex>
  );
}
