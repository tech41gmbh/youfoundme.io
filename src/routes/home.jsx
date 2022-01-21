/** @format */
import React, { useEffect } from 'react';
import '../App.css';
import {
  useMediaQuery,
  Link,
  Text,
  Heading,
  VStack,
  Button,
  Box,
  Avatar,
  Table,
  Tr,
  Td,
  Badge,
  Menu as CHAKRAMENU,
  MenuButton as CHAKRAMENUButton,
  Flex,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';

export default function Home() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1537px)' });

  useEffect(() => {});

  return (
    <Flex>
      <center>
        <Box bg="black.600">
          <center>
            <Heading fontSize="1xl">WELCOME TO YOUFOUNDME</Heading>
            <Heading fontSize="4xl">
              Decentralized Identity
              <br />
              for Web3 & Metaverse
            </Heading>
            <br /> <br />
            <center>
              <Text fontSize="4xl">Youfoundme digital signatures:</Text>
              <Text color="tomato" fontSize="4xl">
                Get your DID-NFT now !
              </Text>
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
            <Text fontSize="1xl">
              Mint your unique <b>DID-NFT</b> on Avalanche Blockchain:
            </Text>
            <Box padding="4" maxH="1xl"></Box>
            <center>
              <Link href="https://app.youfoundme.io">
                <Button
                  variant="outline"
                  fontSize="3xl"
                  color="white.800"
                  colorScheme="blue">
                  DApp MAINNET C-CHAIN
                </Button>{' '}
                (~$5.00)
              </Link>
              <Box padding="4" maxH="1xl"></Box>
              <Link href="https://testnet.youfoundme.io">
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
              variant="outline"
              type="linkedin"
              bgColor="gray.900"
              borderRadius="full"
              px="1"
              colorScheme="green">
              <Box padding="5">
                <Text fontSize="2xl" color="gray.500">
                  A DID is a globally unique Identifier:
                </Text>
                <Text fontSize="2xl" color="yellow.200">
                  <pre>did:yfm:0x44d8bf53dc61569ab2fd0099C3B9abd75cc66b33</pre>
                </Text>
                <Text fontSize="1xl" color="gray.500">
                  An international standard created by W3C Consortium in Geneva.
                </Text>
                <Text fontSize="1xl" color="gray.500">
                  Youfoundme is a DID resolver backed by an extended ERC 721
                  Token
                </Text>
              </Box>
            </Badge>
            <br />
            <br />
            <Flex boxSize="2xl" align="left" bg="black.510" padding="0">
              <VStack>
                <Heading fontSize="5xl">How does it work?</Heading>

                <Box padding="2" borderRadius="md" backgroundColor="blue.800">
                  <Text align="left" fontSize="2xl">
                    <br />
                    Your digital identity is protected with your private wallet
                    key. You mint your NFT with our ƴoufoundme DApp and we will
                    transfer your NFT to your wallet. <br /> <br /> The NFT
                    contains your Decentralized Identity or DID identifier and
                    also guarantees your unique username. Your username serves
                    as an alias, no need to enter the DID code manually. You can
                    also use query codes to share with your friends.
                    <br /> <br />
                    Your contact details are not visible on the public web or
                    blockchain. You control with whom you share your details.
                    You use the connect button to link with another user for
                    access.
                    <br /> <br />
                    If you update your contact details permissioned users will
                    automatically see the updated version. No more outdated
                    mobile numbers or email addresses!
                  </Text>
                </Box>
                <Box height="10px" />
              </VStack>
              <Box height="10px" />
            </Flex>
            <br /> <br /> <br /> <br /> <br /> <br />
            {/* --------------------- */}
            <Flex boxSize="2xl" align="left" bg="black.510" padding="0">
              <VStack>
                <Heading fontSize="5xl">What can i do?</Heading>
                <Box
                  padding="2"
                  align="left"
                  borderRadius="md"
                  backgroundColor="blue.800">
                  <UnorderedList align="left" fontSize="2xl">
                    <ListItem>Sign on without passwords</ListItem>
                    <ListItem>
                      Find like minded people for work and play
                    </ListItem>
                    <ListItem>
                      Work remotely in a decentralized global community
                    </ListItem>
                    <ListItem>Take your avatar across metaverses</ListItem>
                    <ListItem>
                      Connect to recruiters and find jobs/projects
                    </ListItem>
                    <ListItem>
                      Establish trust effortlessly with QR codes
                    </ListItem>
                    <ListItem>Own and prove your identity</ListItem>
                    <ListItem>Create and join organisations</ListItem>
                    <ListItem>
                      Create Verifyable Credentials{' '}
                      <Link
                        fontSize="sm"
                        color="blue.500"
                        href="https://www.w3.org/TR/vc-data-model/"
                        isExternal>
                        (W3C v1.1)
                      </Link>
                    </ListItem>
                    <ListItem>
                      Create vouchers and custodian signatures
                    </ListItem>
                  </UnorderedList>
                </Box>
                <Box height="50px" />
                <Text color="tomato" fontSize="4xl">
                  Youfoundme Decentralized Identity!
                  <br />
                  Welcome to the Future of Digital Identity Management.
                </Text>
              </VStack>
            </Flex>
            <br /> <br />
            <Flex
              boxSize="2xl"
              width="100%"
              align="left"
              bg="black.510"
              padding="0">
              <VStack>
                <Heading fontSize="7xl">Roadmap 2022+</Heading>
                <Box padding="5">
                  <Text align="left" fontSize="2xl" opacity="90%">
                    <UnorderedList>
                      <ListItem>IoS and Android App</ListItem>
                      <ListItem>Recruiter Portal</ListItem>
                      <ListItem>oAuth2 Bridge</ListItem>
                      <ListItem>Unity Support</ListItem>
                      <ListItem>Create Digital Verifyable Signatures</ListItem>
                      <ListItem>Chain Hub</ListItem>
                      <ListItem>Metaverse Connect</ListItem>
                      <ListItem>Custodian Signatures</ListItem>
                      <ListItem>
                        What do you like to see? Contact us at:{' '}
                        <Link
                          color="blue.500"
                          href="mailto:info@youfoundme.io"
                          isExternal>
                          info@youfoundme.io
                        </Link>
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </Box>
                <Text color="tomato" fontSize="4xl">
                  Own your Identity in
                  <br /> Web3 and the Metaverse
                </Text>
              </VStack>
            </Flex>
          </center>
        </Box>
      </center>
    </Flex>
  );
}
