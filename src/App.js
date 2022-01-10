/** @format */

import React, { useEffect, useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
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

//==========================================================================================
export default function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1537px)' });
  const [display, setDisplay] = useState('none');

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

  return (
    <Flex>
      {isDesktop && (
        <Flex position="fixed" top="1rem" right="1rem" align="center">
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
        <Flex position="fixed" top="1rem" right="1rem" align="center">
          <Flex bgColor="black.50" overflowY="auto" flexDir="column">
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
              bgColor="black.20"
              overflowY="auto"
              flexDir="column">
              <Flex flexDir="column" align="center">
                <CLink
                  onClick={() => selectHome()}
                  as="a"
                  variant="ghost"
                  aria-label="Home"
                  w="100%">
                  Home
                </CLink>

                <CLink
                  onClick={() => selectDeveloper()}
                  as="a"
                  variant="ghost"
                  aria-label="AboDeveloperut"
                  w="100%">
                  Developer
                </CLink>

                <CLink
                  onClick={() => selectRecruiter()}
                  as="a"
                  variant="ghost"
                  aria-label="Recruiter"
                  w="100%">
                  Recruiter
                </CLink>

                <CLink
                  onClick={() => selectInvestor()}
                  as="a"
                  variant="ghost"
                  aria-label="Investor"
                  w="100%">
                  Investor
                </CLink>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}

      <Center w="100%">
        <VStack>
          <Heading>Youfoundme</Heading>
          <Outlet />
          <br />
          <Text> Many thanks to our partners and suppliers:</Text>
          <HStack>
            <CLink href="https://www.avax.network/" isExtrernal>
              <Image
                width="100px"
                src="https://youfoundme.io/Avalanche.png"></Image>
            </CLink>
            <CLink href="https://moralis.io/" isExtrernal>
              <Image
                width="100px"
                src="https://youfoundme.io/moralis.jpg"></Image>
            </CLink>
            <CLink href="https://www.cloudflare.com/" isExtrernal>
              <Image
                width="100px"
                src="https://youfoundme.io/cloudflare.png"></Image>
            </CLink>
            <CLink href="https://readyplayer.me/" isExtrernal>
              <Image
                width="100px"
                src="https://youfoundme.io/readyplayerme.jpg"></Image>
            </CLink>
          </HStack>
          <flex bg="black">
            <Text fontSize="xs" color="teal.300">
              <a href="https://youfoundme.io">youfoundme.io</a> -{' '}
              <a href="https://tech41.de" target="_blank">
                TECH41 GmbH
              </a>
              , Unter den Linden 24 - Berlin - Germany 2022
            </Text>
            <br />
          </flex>
        </VStack>
      </Center>
    </Flex>
  );
}
