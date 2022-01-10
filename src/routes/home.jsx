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
            <Heading fontSize="3xl">
              Your Decentralized Identity for Web3 and the Metaverse
            </Heading>
            <br /> <br />
            <center>
              <Table>
                <Tr>
                  <Td>
                    <Text>NFT & DID:</Text>
                  </Td>
                  <Td>
                    <Image src="cryptophine.png" width="90px"></Image>
                  </Td>
                  <Td>
                    <Text>+</Text>
                  </Td>
                  <Td>
                    <Image src="Avalanche.png" width="120px"></Image>
                  </Td>
                  <Td>
                    <Text>=</Text>
                  </Td>
                  <Td>
                    <Image src="id2.png" width="130px"></Image>
                  </Td>
                </Tr>
              </Table>
            </center>
            <br />
            <Text fontSize="2xl">
              Mint your unique DID-NFT on the Avalance Blockchain today:
            </Text>
            <Box padding="4" maxH="1xl"></Box>
            <center>
              <Link href="https://app.youfoundme.io" isExternal>
                <Button colorScheme="blue">DApp Mainet</Button>
              </Link>
              &nbsp;
              <Link href="https://app-dev.youfoundme.io" isExternal>
                <Button colorScheme="blue">DApp Testnerwork</Button>
              </Link>
            </center>
            <br />
            <Badge borderRadius="full" px="2" colorScheme="white">
              <Box padding="2">
                <Text>A DID is a globally unique Identifier </Text>
                <Text fontSize="sm" color="yellow">
                  did:yfm:0x44D8BF53dc61569aB2fd0099C3B9abd75Cc66b33
                </Text>
                <Text fontSize="1xl">
                  An international standard created by W3C Consortium in Geneva.
                </Text>
              </Box>
            </Badge>
            <br />
            <br />
            <Container borderRadius="full" px="2" colorScheme="white">
              <Box padding="2" bg="black">
                <Text bg="black.200">
                  Your identity is protected with your private key and an NFT on
                  the Avalanche blockchain. Stay in control.
                </Text>
              </Box>
            </Container>
            <br />
            <Container
              bg="black"
              borderRadius="full"
              px="2"
              colorScheme="white">
              <Text bg="black.200">
                Decide with whom you share your details. Connnect with like
                minded users for work and play.
              </Text>
            </Container>
            <br />
            <br />
            <Container maxW="container.sm" bgColor="black.900" centerContent>
              <Heading> Roadmap 2022+</Heading>
              <Text>oAuth2 Plugin</Text>
              <Text> Unity Plugin </Text>
              <Text> Chain Hub </Text>
              <Text> MetaverseConnect </Text>
              <Text> Custodian Signature </Text>
            </Container>
          </center>
        </Box>
      </center>
    </Flex>
  );
}
