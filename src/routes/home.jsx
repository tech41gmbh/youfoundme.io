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
  Avatar,
  Image,
  Table,
  Tr,
  Td,
  Badge,
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

export default function Home() {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [display, changeDisplay] = useState('flex');

  useEffect(() => {});

  return (
    <Flex>
      <center>
        <Box bg="black.600">
          <center>
            <Heading fontSize="1xl">WELCOME TO YOUFOUNDME</Heading>
            <Heading fontSize="7xl">Decentralized Identity</Heading>
            <Heading fontSize="7xl">for Web3 & Metaverse.</Heading>
            <br /> <br />
            <center>
              <Heading fontSize="3xl">
                Ƴoufoundme is the future of security,
                <br />
                empowering people to work and play.
              </Heading>
              <br />
              <Table width="85%">
                <Tr>
                  <Td>
                    <Avatar src="cryptophine.png" boxSize="120px"></Avatar>
                  </Td>
                  <Td>
                    <Text>+</Text>
                  </Td>
                  <Td>
                    <Avatar src="Avalanche.png" boxSize="120px"></Avatar>
                  </Td>
                  <Td>
                    <Text>=</Text>
                  </Td>
                  <Td>
                    <Avatar src="id2.png" boxSize="140px"></Avatar>
                  </Td>
                </Tr>
              </Table>
            </center>
            <br />
            <Text fontSize="2xl">
              Mint your unique <b>DID-NFT</b> on the Avalance Blockchain today:
            </Text>
            <Box padding="4" maxH="1xl"></Box>
            <center>
              <Link href="https://app.youfoundme.io" isExternal>
                <Button
                  variant="outline"
                  fontSize="3xl"
                  color="white.800"
                  colorScheme="blue">
                  DApp MAINNET C-CHAIN
                </Button>{' '}
                ($ 5.00)
              </Link>
              <Box padding="4" maxH="1xl"></Box>
              <Link href="https://testnet.youfoundme.io" isExternal>
                <Button
                  variant="outline"
                  padding="4"
                  fontSize="3xl"
                  colorScheme="blue"
                  color="white.800">
                  DApp TEST NETWORK FUJI
                </Button>{' '}
                ($ 0.00)
              </Link>
            </center>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Flex>
              <Badge
                bgColor="gray.900"
                position="relative"
                top="1rem"
                left="1rem"
                align="left"
                borderRadius="full"
                px="2"
                colorScheme="white">
                <Box padding={10}>
                  <Text fontSize="2xl" color="gray.500">
                    A DID is a globally unique Identifier:
                  </Text>
                  <Text fontSize="2xl" color="yellow.200">
                    did:yfm:0x44D8BF53dc61569aB2fd0099C3B9abd75Cc66b33
                  </Text>
                  <Text fontSize="2xl" color="gray.500">
                    An international standard created by W3C Consortium in
                    Geneva.
                  </Text>
                  <Text fontSize="2xl" color="gray.500">
                    Youfoundme is a DID resolver backed by an extended ERC 721
                    Token
                  </Text>
                </Box>
              </Badge>
            </Flex>
            <br />
            <br />
            <br />
            <br />
            <Heading fontSize="7xl">How does it work?</Heading>
            <Flex
              boxSize="3xl"
              top="1rem"
              left="1rem"
              right="1rem"
              align="left"
              bg="black.510"
              padding="0">
              <Text align="left" fontSize="3xl">
                Your digital identity is protected with your private wallet key.
                You mint and NFT on youfoundme which we will transfer to your
                wallet. <br /> <br /> The NFT contains your Decentralized
                Identity or DID code and also guarantees your unique username.
                The username serves as an alias to avoid entering the DID code.
                <br /> <br />
                Your contact details are not visible on the public blockchain.
                You control with whom you share your details.
                <br /> <br />
                If you change contact details permissioned users will
                automatically see the latest version.
              </Text>
            </Flex>
            <Heading fontSize="7xl">What can i use it for?</Heading>
            <Flex
              boxSize="2xl"
              top="1rem"
              left="1rem"
              right="1rem"
              opacity="100%"
              bg="black.100"
              padding="5">
              <Text align="left" fontSize="3xl" opacity="90%">
                <ul>
                  <li>
                    Sign-on effortless to Web3 enabled websites and the
                    Metaverse
                  </li>
                  <li>Proove your identity</li>
                  <li>Create digital verifyable signatures</li>
                  <li>Create signatures as a custodian</li>
                  <li>Create signatures without need to visit a notary</li>
                  <li>Find like minded people and exchage contact details</li>
                  <li>Connect for work and play</li>
                  <li>
                    Show referencees, achievements and projects to recuriters
                    and investors
                  </li>
                  <li>Work remotely in a decentralized global community</li>
                </ul>
              </Text>
            </Flex>
            <Heading fontSize="7xl">Roadmap 2022+</Heading>
            <Flex
              boxSize="2xl"
              top="1rem"
              left="1rem"
              right="1rem"
              opacity="100%"
              bg="black.100"
              padding="15">
              <Text align="left" fontSize="4xl" opacity="90%">
                <ul>
                  <li>Recruiter Portal</li>
                  <li>oAuth2 Plugin</li>
                  <li>Unity Plugin</li>
                  <li>Create Digital Verifyable Signatures</li>
                  <li>Chain Hub</li>
                  <li>Metaverse Connect</li>
                  <li>Custodian Signatures</li>
                </ul>
              </Text>
            </Flex>
          </center>
        </Box>
      </center>
    </Flex>
  );
}
