/** @format */
import React, { useEffect, useState } from 'react';
import '../App.css';
import {
  useColorMode,
  useMediaQuery,
  Link as CLink,
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
  Badge,
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

export default function Faq() {
  useEffect(() => {});
  return (
    <Flex>
      <center>
        <Heading>FAQ</Heading>
        <br />
        <Heading>Youfoundme on mobile</Heading>
        <br />
        <br />
        <Heading>Install MetaMask on your device:</Heading>
        <CLink
          color="blue.200"
          href="https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202"
          isExternal>
          MetaMask Wallet for IoS, iPhone and iPad
        </CLink>
        <br />
        <CLink
          color="blue.200"
          href="https://play.google.com/store/apps/details?id=io.metamask&hl=en&gl=US"
          isExternal>
          MetaMask Wallet for Android: Smartphones and Tablets
        </CLink>
        {/* https://chainlist.org/ */}
        <br /> <br />
        <Heading>Add Avalanche Fuji Testnet to MetaMask </Heading>
        <CLink
          color="blue.200"
          href="https://support.avax.network/en/articles/4626956-how-do-i-set-up-metamask-on-avalanche"
          isExternal>
          How to add a network
        </CLink>
        <pre>
          <ul color="green.200">
            a
            <Badge>
              <li>Network Name: Avalanche Fuji</li>
              <li>RPC-url: https://api.avax-test.network/ext/bc/C/rpc</li>
              <li>ChainID: 43113</li>
              <li>Symbol: AVAX</li>
              <li>Block Explorer URL: https://testnet.snowtrace.io/</li>
            </Badge>
          </ul>
        </pre>
        <br />
        <Text>Add Avalanche Mainnet to MetaMask </Text>
        <pre>
          <ul color="green.200">
            <li>Network Name: Avalanche Mainnet</li>
            <li>RPC-url: https://api.avax.network/ext/bc/C/rpc</li>
            <li>ChainID: 43114</li>
            <li>Symbol: AVAX</li>
            <li>Block Explorer URL: https://snowtrace.io/</li>
          </ul>
        </pre>
        <br /> <br />
        <Heading>Fund Wallet with Avax on Testnet </Heading>
        {/* https://chainlist.org/ */}
        <CLink
          color="blue.200"
          href="https://faucet.avax-test.network/"
          isExternal>
          AVAX Fuji Testnet Faucet
        </CLink>
        <br /> <br />
        <br /> <br />
        <Heading>Fund Wallet with Avax on Mainnet</Heading>
        <br />
        Buy Avax with Apple pay or Google Play
        <br />
        <br /> <br />
        <Heading>Logon to Youfoundme </Heading>
        <Text>Browse to youfoundme.io inside MetaMask</Text>
        <br /> <br />
        <Heading>Mint your NFT </Heading>
        <br /> <br />
        <Heading>Youfoundme in your Browser</Heading>
        <Text>Install Metamask Plugin</Text>
        <CLink href="https://metamask.io/download/">Browser Plugin</CLink>
        <Text>Fund with Avax on Testnet </Text>
        <Text>Fund with Avax on Mainnet </Text>
        <Text>Logon at Youfoundme </Text>
        <Text>Mint your NFT </Text>
        <br />
        <br />
        <br />
        <br />
        <Text>Other Resources</Text>
      </center>
    </Flex>
  );
}
