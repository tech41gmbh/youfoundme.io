/** @format */
import React, { useRef, useEffect, useState } from 'react';
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
  const focusDivEMail = useRef();

  useEffect(() => {
    if (focusDivEMail.current) focusDivEMail.current.focus();
  });

  return (
    <Flex>
      <center>
        <Box bg="black.600">
          <center>
            <Heading fontSize="1xl">WELCOME TO YOUFOUNDME</Heading>
            {isMobile && (
              <span>
                <Heading fontSize="5xl">Decentralized Identity</Heading>
                <br />
                <Heading fontSize="5xl">for Web3 & Metaverse.</Heading>
              </span>
            )}
            {!isMobile && (
              <span>
                <Heading fontSize="7xl">Decentralized Identity</Heading>
                <br />
                <Heading fontSize="7xl">for Web3 & Metaverse.</Heading>
              </span>
            )}
            <br /> <br />
            <center>
              <Heading fontSize="3xl">
                Ƴoufoundme is the future of security,
                <br />
                empowering people to work and play.
              </Heading>
              <br />
              <Table width="65%">
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
            {isMobile && (
              <Text fontSize="1xl">
                Mint your unique <b>DID-NFT</b> on Avalance Blockchain today:
              </Text>
            )}
            {!isMobile && (
              <Text>
                Mint your unique <b>DID-NFT</b> on Avalance Blockchain today:
              </Text>
            )}
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
            <Badge
              bgColor="gray.900"
              borderRadius="full"
              px="1"
              colorScheme="white">
              {isMobile && (
                <Box padding="3">
                  <Text fontSize="1xl" color="gray.500">
                    A DID is a globally unique Identifier:
                  </Text>
                  <Text fontSize="1xl" color="yellow.200">
                    did:yfm:0x44D8BF53dc61569aB2fd0099C3B9abd75Cc66b33
                  </Text>
                  <Text fontSize="1xl" color="gray.500">
                    An international standard created by W3C Consortium in
                    Geneva.
                  </Text>
                  <Text fontSize="1xl" color="gray.500">
                    Youfoundme is a DID resolver backed by an extended ERC 721
                    Token
                  </Text>
                </Box>
              )}
              {!isMobile && (
                <Box padding="5">
                  <Text fontSize="2xl" color="gray.500">
                    A DID is a globally unique Identifier:
                  </Text>
                  <Text fontSize="2xl" color="yellow.200">
                    did:yfm:0x44D8BF53dc61569aB2fd0099C3B9abd75Cc66b33
                  </Text>
                  <Text fontSize="1xl" color="gray.500">
                    An international standard created by W3C Consortium in
                    Geneva.
                  </Text>
                  <Text fontSize="1xl" color="gray.500">
                    Youfoundme is a DID resolver backed by an extended ERC 721
                    Token
                  </Text>
                </Box>
              )}
            </Badge>
            <br />
            <br />
            {isMobile && <Heading fontSize="5xl">How does it work?</Heading>}
            {!isMobile && <Heading fontSize="7xl">How does it work?</Heading>}
            <Flex
              boxSize="3xl"
              top="1rem"
              left="1rem"
              right="1rem"
              align="left"
              bg="black.510"
              padding="0">
              {isMobile && (
                <Container>
                  <Text align="left" fontSize="1xl">
                    Your digital identity is protected with your private wallet
                    key. You mint a NFT on ƴoufoundme which we will transfer to
                    your wallet. <br /> <br /> The NFT contains your
                    Decentralized Identity or DID code and also guarantees your
                    unique username. The username serves as an alias to avoid
                    entering the DID code.
                    <br /> <br />
                    Your contact details are not visible on the public
                    blockchain. You control with whom you share your details.
                    <br /> <br />
                    If you change contact details permissioned users will
                    automatically see the latest version.
                  </Text>
                </Container>
              )}
              {!isMobile && (
                <Text align="left" fontSize="3xl">
                  Your digital identity is protected with your private wallet
                  key. You mint a NFT on ƴoufoundme which we will transfer to
                  your wallet. <br /> <br /> The NFT contains your Decentralized
                  Identity or DID code and also guarantees your unique username.
                  The username serves as an alias to avoid entering the DID
                  code.
                  <br /> <br />
                  Your contact details are not visible on the public blockchain.
                  You control with whom you share your details.
                  <br /> <br />
                  If you change contact details permissioned users will
                  automatically see the latest version.
                </Text>
              )}
            </Flex>
            {isMobile && (
              <Heading fontSize="5xl">What can i use it for?</Heading>
            )}
            {!isMobile && (
              <Heading fontSize="7xl">What can i use it for?</Heading>
            )}
            <Flex
              boxSize="2xl"
              top="1rem"
              left="1rem"
              right="1rem"
              opacity="100%"
              bg="black.100"
              padding="5px">
              <Container>
                {isMobile && (
                  <Text align="left" fontSize="1xl" opacity="90%">
                    <ul>
                      <li>
                        Sign-on effortless to Web3 enabled websites and the
                        Metaverse
                      </li>
                      <li>Prove your identity</li>
                      <li>Create digital verifyable signatures</li>
                      <li>Create signatures as a custodian</li>
                      <li>Create signatures without need to visit a notary</li>
                      <li>
                        Find like minded people and exchange contact details
                      </li>
                      <li>Connect for work and play</li>
                      <li>
                        Show references, achievements and projects to recruiters
                        and investors
                      </li>
                      <li>Work remotely in a decentralized global community</li>
                    </ul>
                  </Text>
                )}
                {!isMobile && (
                  <Text align="left" fontSize="3xl" opacity="90%">
                    <ul>
                      <li>
                        Sign-on effortless to Web3 enabled websites and the
                        Metaverse
                      </li>
                      <li>Prove your identity</li>
                      <li>Create digital verifyable signatures</li>
                      <li>Create signatures as a custodian</li>
                      <li>Create signatures without need to visit a notary</li>
                      <li>
                        Find like minded people and exchange contact details
                      </li>
                      <li>Connect for work and play</li>
                      <li>
                        Show references, achievements and projects to recruiters
                        and investors
                      </li>
                      <li>Work remotely in a decentralized global community</li>
                    </ul>
                  </Text>
                )}
              </Container>
            </Flex>
            <br /> <br />
            {isMobile && <Heading fontSize="5xl">Roadmap 2022+</Heading>}
            {!isMobile && <Heading fontSize="7xl">Roadmap 2022+</Heading>}
            <Flex
              boxSize="1xl"
              top="1rem"
              left="1rem"
              right="1rem"
              opacity="100%"
              bg="black.100"
              padding="10">
              <Container>
                <Text align="left" fontSize="2xl" opacity="90%">
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
              </Container>
            </Flex>
          </center>
        </Box>
      </center>
    </Flex>
  );
}
