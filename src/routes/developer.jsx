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

        <Text color="yellow.500">Dig in right away?</Text>

        <Text color="yellow.500">
          You find ABI (we use Solidity) and Youfoundme Contracts at:{' '}
          <Link
            color="blue.500"
            href="https://github.com/tech41gmbh/yfm_contracts"
            isExternal>
            github
          </Link>
        </Text>
        <Text color="yellow.500">
          Contract Avalanche Testnet FUJI:{' '}
          <Link
            color="blue.500"
            href="https://testnet.snowtrace.io/address/0xe83cA455C78fdc4Eac78444Da84cFb835A10ccA4"
            isExternal>
            0xe83cA455C78fdc4Eac78444Da84cFb835A10ccA4
          </Link>
        </Text>
        <Text color="yellow.500">
          Contract Avalanche Mainnet:{' '}
          <Link
            color="blue.500"
            href="https://snowtrace.io/address/0x1A014C43a4A67e74449337bCC53220F9de9f7A13"
            isExternal>
            0x1A014C43a4A67e74449337bCC53220F9de9f7A13
          </Link>
        </Text>
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
