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
import Faq from './routes/faq';
import '@fontsource/noto-sans/700.css';

const theme = extendTheme({
  fonts: {
    heading: 'Noto Sans',
    body: 'Noto Sans',
  },
  config: {
    initialColorMode: 'dark',
  },
});

const rootElement = document.getElementById('root');

render(
  <HashRouter basename={''}>
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="developer" element={<Developer />} />
          <Route path="recruiter" element={<Recruiter />} />
          <Route path="investor" element={<Investor />} />
          <Route path="faq" element={<Faq />} />
        </Route>
      </Routes>
    </ChakraProvider>
  </HashRouter>,
  rootElement
);
