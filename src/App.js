/** @format */

import React, { useEffect, useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
  Input,
  useColorMode,
  Center,
  Link as CLink,
  Text,
  Heading,
  VStack,
  Button,
  IconButton,
  Container,
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
  CopyIcon,
} from '@chakra-ui/icons';
import WebFont from 'webfontloader';
import axios from 'axios';

//==========================================================================================
export default function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1537px)' });
  const [display, setDisplay] = useState('none');
  const [email, setEmail] = React.useState('');
  const [emailOk, setEmailOk] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

  const navigate = useNavigate();
  const selectHome = () => {
    setDisplay('none');
    navigate('home');
  };
  const selectDeveloper = () => {
    setDisplay('none');
    navigate('developer');
  };
  const selectRecruiter = () => {
    setDisplay('none');
    navigate('recruiter');
  };
  const selectInvestor = () => {
    setDisplay('none');
    navigate('investor');
  };

  const sendNews = async () => {
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    if (!pattern.test(email)) {
      var isValid = false;
      setEmailOk('');
      setEmailError('Email not valid');
      return;
    }

    const url =
      'https://europe-west3-thematic-flash-328716.cloudfunctions.net/storemail?email=' +
      email;
    let res = await axios.get(url);
    if (res.status == 200) {
      setEmailOk('subscribed');
      setEmailError('');
    } else {
      setEmailOk('');
      setEmailError(res.statusText);
    }
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Noto Sans'],
      },
    });
  }, []);

  return (
    <Flex>
      <Flex position="absolute" top="1rem" left="1rem" align="center">
        <HStack>
          <Image src="/favicon-32x32.png"></Image>
          <Heading>ƴoufoundme</Heading>
        </HStack>
      </Flex>
      {isDesktop && (
        <Flex position="absolute" top="1rem" right="1rem" align="center">
          <Flex>
            <CLink
              href="/#/home"
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%">
              <Button color="gray">Home</Button>
            </CLink>
            &nbsp;
            <CLink
              href="/#/developer"
              as="a"
              variant="ghost"
              aria-label="Developer"
              my={5}
              w="100%">
              <Button color="gray">Developer</Button>
            </CLink>
            &nbsp;
            <CLink
              href="/#/recruiter"
              as="a"
              variant="ghost"
              aria-label="Recruiter"
              my={5}
              w="100%">
              <Button color="gray">Recruiter</Button>
            </CLink>
            &nbsp;
            <CLink
              href="/#/investor"
              as="a"
              variant="ghost"
              aria-label="Investor"
              my={5}
              w="100%">
              <Button color="gray">Investor</Button>
            </CLink>
          </Flex>
        </Flex>
      )}
      {!isDesktop && (
        <Flex
          position="absolute"
          top="1rem"
          right="1rem"
          align="center"
          z-index="-1">
          <Flex
            z-index="-1"
            bgColor="black.500"
            overflowY="auto"
            flexDir="column">
            <Flex justify="flex-end">
              <IconButton
                icon={<HamburgerIcon />}
                mt={2}
                mr={2}
                aria-label="Open Menu"
                size="lg"
                onClick={() => setDisplay(true)}
              />
            </Flex>
            <Flex
              display={display} // added line
              bgColor="black.500"
              overflowY="auto"
              flexDir="column">
              <Flex
                padding="0"
                margin="2"
                flexDir="column"
                align="center"
                bgColor="black.500">
                <CLink
                  onClick={() => selectHome()}
                  as="a"
                  variant="ghost"
                  aria-label="Home"
                  w="100%">
                  <Text padding="1" bgColor="tomato" fontSize="2xl">
                    <b>Home</b>
                  </Text>
                </CLink>

                <CLink
                  onClick={() => selectDeveloper()}
                  as="a"
                  variant="ghost"
                  aria-label="AboDeveloperut"
                  w="100%">
                  <Text padding="1" bgColor="tomato" fontSize="2xl">
                    <b>Developer</b>
                  </Text>
                </CLink>

                <CLink
                  onClick={() => selectRecruiter()}
                  as="a"
                  variant="ghost"
                  aria-label="Recruiter"
                  w="100%">
                  <Text padding="1" bgColor="tomato" fontSize="2xl">
                    <b>Recruiter</b>
                  </Text>
                </CLink>

                <CLink
                  onClick={() => selectInvestor()}
                  as="a"
                  variant="ghost"
                  aria-label="Investor"
                  w="100%">
                  <Text padding="1" bgColor="tomato" fontSize="2xl">
                    <b>Investor</b>
                  </Text>
                </CLink>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}

      <Center w="100%">
        <VStack>
          <Outlet margin="5px" />

          <Heading>News letter</Heading>
          <HStack>
            <Input
              width="500px"
              placeholder="email"
              fontSize="1xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            &nbsp;
            <Button onClick={sendNews}>Invite me</Button>
          </HStack>
          <Text color="green.500">{emailOk}</Text>
          <Text color="red.500">{emailError}</Text>
          <div id="thanks"></div>
          <br />
          <br />
          <Heading>Thank you to our partners and suppliers</Heading>
          <br />
          <HStack>
            <CLink href="https://www.avax.network/" isExternal>
              <Image
                width="100px"
                src="https://youfoundme.io/Avalanche.png"></Image>
            </CLink>
            <CLink href="https://moralis.io/" isExternal>
              <Image
                width="100px"
                src="https://youfoundme.io/moralis.jpg"></Image>
            </CLink>
            <CLink href="https://www.cloudflare.com/" isExternal>
              <Image
                width="100px"
                src="https://youfoundme.io/cloudflare.png"></Image>
            </CLink>
            <CLink href="https://readyplayer.me/" isExternal>
              <Image
                width="100px"
                src="https://youfoundme.io/readyplayerme.jpg"></Image>
            </CLink>
            <CLink href="https://aws.com" isExternal>
              <Image width="100px" src="https://youfoundme.io/aws.png"></Image>
            </CLink>
          </HStack>
          <br />
          <br />
          <flex bg="black" align="center">
            <Text fontSize="xs" color="teal.300">
              <a href="https://youfoundme.io">ƴoufoundme.io</a> -{' '}
              <a href="https://tech41.de" target="_blank">
                TECH41 GmbH
              </a>
              , Unter den Linden 24 - Berlin - Germany 2022 - v.1.0.1
            </Text>
            <br />
            <Text fontSize="xs">
              This website is maintained by TECH41 GmbH, Unter den Linden 24,
              10117 Berlin. The contents and opinions of this website are those
              of TECH41 GmbH. General Manager: Mathias Dietrich{' '}
              <a href="mailto:info@youfoundme.io<">info@youfoundme.io</a>
              TECH41 GmbH provides a cryote based Digitas Identity Solution to
              the public. TECH41 GmbH does not warrant that the information
              provided by these websites is correct, complete, and up-to-date.
            </Text>
          </flex>
        </VStack>
      </Center>
    </Flex>
  );
}
