/** @format */
import './App.css';
import {
  Link,
  Text,
  Heading,
  VStack,
  Button,
  Box,
  ChakraProvider,
  extendTheme,
  HStack,
  Image,
  Table,
  Tr,
  Td,
} from '@chakra-ui/react';

function App() {
  return (
    <VStack>
      <Box height="10px" bg="black.030">
        {' '}
        &nbsp;
      </Box>
      <HStack>
        <Link href="https://app.youfoundme.io" isExternal>
          <Button>DApp Mainet</Button>
        </Link>
        <Link href="https://app-dev.youfoundme.io" isExternal>
          <Button>DApp Testnerwork</Button>
        </Link>
        <Button>Developer</Button>
        <Button>Recruiter</Button>
        <Button>Investor</Button>
        <Button>Roadmap</Button>
      </HStack>
      <Text fontSize="4xl">Welcome to</Text>
      <Heading fontSize="8xl">Youfoundme</Heading>
      <br />
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
                  <Image src="avatar2.png" width="90px"></Image>
                </Td>
                <Td>
                  <Text>==></Text>
                </Td>
                <Td>
                  <Image src="Avalanche.png" width="120px"></Image>
                </Td>
                <Td>
                  <Text>==></Text>
                </Td>
                <Td>
                  <Image src="id2.png" width="130px"></Image>
                </Td>
              </Tr>
            </Table>
          </center>
          <br />
          <Text fontSize="2xl">
            Mint your unique DID-NFT on the Avalance Blockchain
          </Text>
          <br />
          <Text>A DID is a globally unique Identifier </Text>
          <Text fontSize="sm" color="yellow">
            did:yfm:0x44D8BF53dc61569aB2fd0099C3B9abd75Cc66b33
          </Text>
          <Text>
            An international standard created by{' '}
            <Link href="https://www.w3.org/TR/did-core" isExtern>
              W3C in Geneva.
            </Link>
          </Text>
          <br />
          <Text>
            Your identity is protected with your private key and an NFT on the{' '}
            <Link href="">Avalanche blockchain</Link>. <br />
            Stay in control. Decide with whom you share your details. Connnect
            with like minded users for work and play.
            <br />
            <br />
            Logon with <Link href="">Meta Mask</Link> or{' '}
            <Link href="">Wallet Connect</Link> now:
          </Text>
        </center>
      </Box>
      <HStack>
        <Link href="https://app.youfoundme.io" isExternal>
          <Button>Livenet DApp</Button>
        </Link>
        <Link href="https://app-dev.youfoundme.io" isExternal>
          <Button>Fuji Testnet DApp</Button>
        </Link>
      </HStack>
      <Heading fontSize="4xl">Youfoundme DApp</Heading>
      <br />
      <br />
      <Heading fontSize="4xl">Developer</Heading>
      <Text>Coming soon: Access to the youfoundme REST API</Text>

      <br />
      <Heading fontSize="4xl">Recruiter</Heading>
      <Text>Coming soon: Recruiter Search Portal</Text>
      <br />
      <Heading fontSize="4xl">Investor</Heading>
      <Text>
        We love to talk to you. Please <Link>reach out</Link>
      </Text>
      <br />
      <br />
      <Heading fontSize="4xl">Roadmap 2022+</Heading>
      <Text>oAuth2 Plugin</Text>
      <Text>Unity Plugin</Text>
      <Text>Chain Oracle</Text>
      <Text>Chain Hub</Text>
      <Text>Metaverse Connect</Text>
      <Text>Custodian Signature</Text>
      <br />
      <Text fontSize="2xl">Many thanks to our partners and suppliers:</Text>

      <HStack>
        <Image width="100px" src="Avalanche.png"></Image>
        <Image width="100px" src="moralis.jpg"></Image>&nbsp;&nbsp;
        <Image width="100px" src="cloudflare.png"></Image>&nbsp;&nbsp;
        <Image width="100px" src="readyplayerme.jpg"></Image>&nbsp;&nbsp;
      </HStack>

      <Box width="100%" minHeight="20px">
        <center>
          <br />
          <Text color="blue.500" fontSize="sm">
            youfoundme.io -{' '}
            <Link href="https.tech41.de" isExternal>
              TECH41 GmbH
            </Link>
            , Unter den Linden 24 - Berlin - Germany 2022
          </Text>
        </center>
      </Box>
    </VStack>
  );
}

export default App;
