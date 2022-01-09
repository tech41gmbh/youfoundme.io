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
} from '@chakra-ui/react';

function App() {
  return (
    <VStack>
      <Box height="10px" bg="black.030">
        {' '}
        &nbsp;
      </Box>
      <HStack>
        <Button>DApp</Button>
        <Button>Developer</Button>
        <Button>Recruiter</Button>
        <Button>Investor</Button>
        <Button>Roadmap</Button>
      </HStack>
      <Text fontSize="4xl">Welcome to</Text>
      <Heading fontSize="9xl">Youfoundme</Heading>
      <br />
      <Box bg="black.600">
        <center>
          <Heading fontSize="3xl">
            Your Decentraliced Identity for Web3 and the Metaverse
          </Heading>
          <br />

          <HStack>
            <Image src="cryptophine.png"></Image>
            <Text> ===> </Text>
            <Image src="Avalanche.png"></Image>
            <Text>
              Mint your NFT with your Digental Identity
              <br /> on Avalance Blockchain
            </Text>
          </HStack>

          <br />
          <Text>A DID looks like this: </Text>
          <Text fontSize="sm" color="yellow">
            did:yfm:0x44D8BF53dc61569aB2fd0099C3B9abd75Cc66b33
          </Text>
          <Text>
            and is an international standard created by{' '}
            <Link href="https://www.w3.org/TR/did-core" isExtern>
              W3C in Geneva.
            </Link>
          </Text>
          <br />
          <Text>
            Your identity is protected by the{' '}
            <Link href="">Avalanche blockchain</Link> and only you can access
            youIdentity.
            <br />
            Logon today using a Crypto Wallet like{' '}
            <Link href="">Meta Mask</Link> or other Wallets using
            <Link href="">Wallet Connect</Link>
          </Text>
        </center>
      </Box>

      <br />
      <br />
      <Heading fontSize="4xl">Youfoundme DApp</Heading>
      <HStack>
        <Link href="https://app.youfoundme.io" isExtern>
          <Button>Youfoundme DApp</Button>
        </Link>
        <Link href="https://app-dev.youfoundme.io" isExtern>
          <Button>Youfoundme Test DApp</Button>
        </Link>
      </HStack>
      <br />
      <br />
      <Heading fontSize="4xl">Developer</Heading>
      <Text>Coming soon: access to the youfoundme API</Text>
      <Text>Coming soon: access to the youfoundme API</Text>
      <br />
      <br />
      <Heading fontSize="4xl">Recruiter</Heading>
      <Text>Coming soon: Recruiter Search Portal</Text>
      <br />
      <br />
      <Heading fontSize="4xl">Investor</Heading>
      <Text>
        We are open for funding. If you like to get in contact please message us
        <Link> here</Link>
      </Text>
      <br />
      <br />
      <Heading fontSize="4xl">Roadmap</Heading>
      <Text>oAuth2 Plugin</Text>
      <Text>Unity Plugin</Text>
      <Text>Chain Oracle</Text>
      <Text>Metaverse Connect</Text>
      <Text>Chain Hub</Text>
      <Text>Custodian Signature</Text>
      <br />
      <br />
      <Box width="100%" bg="black.000" minHeight="20px">
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
