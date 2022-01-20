/** @format */

import React, { useRef, useEffect, useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
  Input,
  Center,
  Link as CLink,
  Text,
  Heading,
  VStack,
  Button,
  IconButton,
  HStack,
  Image,
  Menu as CHAKRAMENU,
  MenuButton as CHAKRAMENUButton,
  Flex,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import axios from 'axios';

//==========================================================================================
export default function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1537px)' });
  const [display, setDisplay] = useState('none');
  const [email, setEmail] = React.useState('');
  const [emailOk, setEmailOk] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const focusDivEMail = useRef();
  const [windowsWidth, setWindowsWidth] = React.useState(0);

  const flipDisplay = () => {
    if (display == 'none') {
      setDisplay('true');
    } else {
      setDisplay('none');
    }
  };
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

  const selectFaq = () => {
    setDisplay('none');
    navigate('faq');
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
    setWindowsWidth(window.innerWidth);
    function handleResize() {
      setWindowsWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    //if (focusDivEMail.current) focusDivEMail.current.focus();
  }, []);

  return (
    <Flex
      bgImage="url('bg.jpg')"
      position="absolute"
      top="0px"
      left="0px"
      right="0px"
      width="100%">
      <Flex
        position="absolute"
        left="0"
        right="0"
        width="100%"
        height="40px"
        // #7968CA
        bgGradient="linear(to-l, #3333FF, #E84142)"
        bgColor="blue.800">
        <center>
          <CLink
            href="/#/faq"
            position="absolute"
            top="5px"
            left={windowsWidth / 4}
            fontSize="xl"
            color="white.100">
            Using ƴoufoundme on mobile? =>
          </CLink>
        </center>
      </Flex>

      <Flex position="absolute" top="3rem" left="1rem">
        <CLink href="https://youfoundme.io">
          <HStack>
            <Image src="/favicon-32x32.png"></Image>
            <Heading>ƴoufoundme</Heading>
          </HStack>
        </CLink>
      </Flex>
      {isDesktop && (
        <Flex position="absolute" top="2rem" right="1rem" align="center">
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
          &nbsp;
          <CLink
            href="/#/faq"
            as="a"
            variant="ghost"
            aria-label="FAQ"
            my={5}
            w="100%">
            <Button color="gray">FAQ</Button>
          </CLink>
        </Flex>
      )}

      {/* // Mobile ================================= */}
      {!isDesktop && (
        <Flex
          position="absolute"
          top="40px"
          right="2px"
          overflowY="auto"
          flexDir="column">
          <Flex justify="flex-end">
            <IconButton
              icon={<HamburgerIcon />}
              mt={2}
              mr={2}
              aria-label="Open Menu"
              size="lg"
              onClick={() => flipDisplay()}
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
                <Text padding="1" bgColor="blue.800" fontSize="2xl">
                  <b>Home</b>
                </Text>
              </CLink>

              <CLink
                onClick={() => selectDeveloper()}
                as="a"
                variant="ghost"
                aria-label="AboDeveloperut"
                w="100%">
                <Text padding="1" bgColor="blue.800" fontSize="2xl">
                  <b>Developer</b>
                </Text>
              </CLink>

              <CLink
                onClick={() => selectRecruiter()}
                as="a"
                variant="ghost"
                aria-label="Recruiter"
                w="100%">
                <Text padding="1" bgColor="blue.800" fontSize="2xl">
                  <b>Recruiter</b>
                </Text>
              </CLink>

              <CLink
                onClick={() => selectInvestor()}
                as="a"
                variant="ghost"
                aria-label="Investor"
                w="100%">
                <Text padding="1" bgColor="blue.800" fontSize="2xl">
                  <b>Investor</b>
                </Text>
              </CLink>
              <CLink
                onClick={() => selectFaq()}
                as="a"
                variant="ghost"
                aria-label="FAQ"
                w="100%">
                <Text padding="1" bgColor="blue.800" fontSize="2xl">
                  <b>FAQ</b>
                </Text>
              </CLink>
            </Flex>
          </Flex>
        </Flex>
      )}

      <Center w="100%">
        <VStack width="100%">
          <br />
          <br />
          <br />
          <br />
          {/* ===========================================This is the main Outlet======================================== */}
          <Outlet width="100%" margin="5px" />
          {/* ===========================================This is the main Outlet======================================== */}

          <Heading>Stay up to date</Heading>
          <HStack>
            <Input
              width="300px"
              placeholder="subscribe me email"
              fontSize="1xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            &nbsp;
            <Button onClick={sendNews} color="tomato">
              Invite me
            </Button>
          </HStack>
          <Text color="green.500">{emailOk}</Text>
          <Text color="red.500">{emailError}</Text>
          <Text id="thanks"></Text>
          <br />
          <br />
          <Heading>Thank you to our partners</Heading>
          <br />
          <HStack>
            <CLink href="https://www.avax.network/" isExternal>
              <Image
                width="80px"
                src="https://youfoundme.io/Avalanche.png"></Image>
            </CLink>
            <CLink href="https://moralis.io/" isExternal>
              <Image
                width="80px"
                src="https://youfoundme.io/moralis.jpg"></Image>
            </CLink>
            <CLink href="https://www.cloudflare.com/" isExternal>
              <Image
                width="80px"
                src="https://youfoundme.io/cloudflare.png"></Image>
            </CLink>
            <CLink href="https://readyplayer.me/" isExternal>
              <Image
                width="80px"
                src="https://youfoundme.io/readyplayerme.jpg"></Image>
            </CLink>
            <CLink href="https://aws.com" isExternal>
              <Image width="80px" src="https://youfoundme.io/aws.png"></Image>
            </CLink>
          </HStack>
          <br />
          <br />
          <Flex bg="black" align="center">
            <VStack>
              <Text fontSize="xs" color="teal.300">
                <CLink href="https://youfoundme.io">ƴoufoundme.io</CLink> -{' '}
                <CLink href="https://tech41.de" target="_blank">
                  TECH41 GmbH
                </CLink>
                , Unter den Linden 24 - Berlin - Germany 2022 - v.1.0.3
              </Text>

              <Text fontSize="xs" color="gray.600">
                This website is maintained by TECH41 GmbH, Unter den Linden 24,
                10117 Berlin. The contents and opinions of this website are
                those of TECH41 GmbH. General Manager: Mathias Dietrich{' '}
                <a href="mailto:info@youfoundme.io<">info@youfoundme.io</a>.
                TECH41 GmbH provides a cryote based Digitas Identity Solution to
                the public. TECH41 GmbH does not warrant that the information
                provided by these websites is correct, complete, and up-to-date.
              </Text>
              <br />
            </VStack>
          </Flex>
        </VStack>
      </Center>
    </Flex>
  );
}
