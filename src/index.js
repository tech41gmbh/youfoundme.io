/** @format */

import React from 'react';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { render } from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Home from './routes/home';
import Developer from './routes/developer';
import Recruiter from './routes/recruiter';
import Investor from './routes/investor';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
});

const rootElement = document.getElementById('root');

render(
  <ChakraProvider theme={theme}>
    <HashRouter basename={''}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="developer" element={<Developer />} />
          <Route path="recruiter" element={<Recruiter />} />
          <Route path="investor" element={<Investor />} />
        </Route>
      </Routes>
    </HashRouter>
  </ChakraProvider>,
  rootElement
);
