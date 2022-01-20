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
        <br />
        <Badge>
          <Text>Network Name: Avalanche Fuji</Text>
          <Text>RPC-url: https://api.avax-test.network/ext/bc/C/rpc</Text>
          <Text>ChainID: 43113</Text>
          <Text>Symbol: AVAX</Text>
          <Text>Block Explorer URL: https://testnet.snowtrace.io/</Text>
        </Badge>
        <br />
        <br />
        <Badge>
          <Text>Network Name: Avalanche Mainnet</Text>
          <Text>RPC-url: https://api.avax.network/ext/bc/C/rpc</Text>
          <Text>ChainID: 43114</Text>
          <Text>Symbol: AVAX</Text>
          <Text>Block Explorer URL: https://snowtrace.io/</Text>
        </Badge>
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
        Buy Avax with Apple Pay or Google Play or transfer from exchanges like{' '}
        <CLink color="blue.500" href="coinbase.com" ixExternal>
          Coinbase{' '}
        </CLink>
        or{' '}
        <CLink color="blue.500" href="https://www.kraken.com/" ixExternal>
          {' '}
          Kraken
        </CLink>
        .
        <br />
        <br /> <br />
        <Heading>Logon to Youfoundme on mobile</Heading>
        <Text>
          Use Youfoundme <b>inside(!)</b> MetaMask using the MetaMask build-in
          web browser, go to
          <br />
          <CLink color="blue.500" href="https://youfoundme.io">
            youfoundme.io
          </CLink>{' '}
          and choose our DApp on Avalanche Mainnet or DApp Avalanche Test
          Network FUJI.
        </Text>
        <br /> <br />
        <Heading>Mint your NFT </Heading>
        <br />
        Choose the right network and user in Meta Mask.
        <br />
        Under Me section in youfoundme register a new username. Choose carefully
        as this can't be changed when the NFT is minted.
        <br /> <br />
        Fill out your profile and choose an Avatar image (best 400 x 400).
        Upload a 3d Avatar or create a new one with ready player me.
        <br /> <br /> When you are ready mint your Youfoundme DID NFT, this
        might take a minute or two.
        <br /> <br />
        <Heading>Youfoundme in your Browser on Desktop</Heading>
        <Text>Install MetaMask Plugin</Text>
        <Text>
          Install MetaMask as a Google Chrome Browser plugin:{' '}
          <CLink color="blue.500" href="https://metamask.io/download/">
            MetaMask install
          </CLink>
          <br />
          <br />{' '}
        </Text>
      </center>
      <br />
      <br />
    </Flex>
  );
}
