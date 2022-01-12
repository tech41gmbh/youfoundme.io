/** @format */
import React, { useEffect, useState, useRef } from 'react';
import '../App.css';
import {
  useColorMode,
  useMediaQuery,
  Link as CLink,
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
  Textarea,
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
import axios from 'axios';

export default function Investor() {
  const [investor, setInvestor] = React.useState('');
  const [investorOk, setInvestorOk] = React.useState('');
  const [investorError, setInvestorError] = React.useState('');

  const focusDiv = useRef();

  const sendInvestor = async () => {
    const url =
      'https://api.youfoundme.io/v0/message/' + encodeURIComponent(investor);
    let res = await axios.get(url);
    if (res.data.status == 'ok') {
      setInvestorOk('Thank you');
      setInvestorError('');
    } else {
      setInvestorOk('');
      setInvestorError(res.statusText);
    }
  };

  useEffect(() => {
    if (focusDiv.current) focusDiv.current.focus();
  });
  return (
    <center>
      <Heading>Investor</Heading>
      <Box padding="4" maxH="1xl">
        <br />
        <Text fontSize="2xl">
          {' '}
          We would love to engage with you.
          <br />
          <br /> Please contact us
        </Text>
        <Textarea
          ref={focusDiv}
          onChange={(e) => setInvestor(e.target.value)}
          value={investor}
          width="700px"
          height="200px"
          fontSize="2xl"></Textarea>
        <Box h="10px"></Box>
        <Button onClick={sendInvestor}>send</Button>
        <Text color="green.500">{investorOk}</Text>
        <Text color="red.500">{investorError}</Text>
        <br /> <br />
        or email us at:&nbsp;
        <CLink href="mailto:investor@youfoundme.io" isExternal>
          investor@youfundme.io
        </CLink>
        <br />
        <br />
        <Text></Text>
      </Box>
    </center>
  );
}
