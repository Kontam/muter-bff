import { configure, addDecorator,addParameters } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import viewPorts from './viewports';
import GlobalStyle from '../src/modules/styles/GlobalStyle';
import { theme } from '../src/modules/styles/theme';

if (process.env.NODE_ENV === 'test') {
  require('babel-plugin-require-context-hook/register')();
}

addParameters({
  viewport: {
    viewports: viewPorts, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'PC',
  },
});
// jestではGlobalStyleのライブラリにあるwindowが参照できない
addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {process.env.NODE_ENV !== 'test' && <GlobalStyle props={theme}/>}
    {story()}
  </ThemeProvider>
))

const req = require.context('../src/components/', true, /\.stories\.(js|jsx|ts|tsx|mdx)$/);

configure(req, module);
