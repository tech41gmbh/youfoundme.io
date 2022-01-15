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

export default function Recruiter() {
  const focusDivEMail = useRef();

  useEffect(() => {
    if (focusDivEMail.current) focusDivEMail.current.focus();
  });

  return (
    <Flex>
      <center>
        <Heading>Recruiter</Heading>
        <br />

        <Text>Coming soon:</Text>
        <br />
        <Container align="left">
          <ul>
            <li>
              <Text fontSize="2xl">Recruiter Portal</Text>
            </li>
            <li>
              <Text fontSize="2xl">Extended Search Features</Text>
            </li>
            <li>
              <Text fontSize="2xl">Bookmark Candidates</Text>
            </li>
          </ul>
        </Container>
        <br />
        <br />
        <br />
        <br />
      </center>
    </Flex>
  );
}
