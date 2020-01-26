import { configure, addDecorator,addParameters } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import requireContext from 'require-context.macro';

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

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle props={theme}/>
    {story()}
  </ThemeProvider>
))

const req = require.context('../src/components/', true, /\.stories\.(js|jsx|ts|tsx|mdx)$/);

configure(req, module);
