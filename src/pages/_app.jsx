import App from 'next/app';
import React from 'react';
import withReduxStore from '../modules/with-redux-store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { theme } from '../modules/styles/theme';
import GlobalStyle from '../modules/styles/GlobalStyle'

class MyApp extends App {
  constructor(props) {
    super(props);
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <ThemeProvider theme={theme}>
          <GlobalStyle props={theme}/>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)
