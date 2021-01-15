import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Provider } from 'react-redux'
import { initializeStore, useStore } from 'store'

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

import LeftNav from 'components/common/LeftNav'
import RightNav from 'components/common/RightNav'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    padding: 0,
  },
  main: {
    padding: 0,
    position: 'relative',
  },
}));

export default function MyApp(props) {
  const { Component, pageProps, initialReduxState} = props;
  const classes = useStyles();
  const store = useStore(initialReduxState)

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Muses Official Online Store | MUSES.jewelry</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <CssBaseline /> 

            <Container component="main" className={classes.main}>
              <LeftNav />
              <Component {...pageProps} />
              <RightNav />
            </Container>

          </div>
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  );
}

MyApp.getInitialProps = async context => {
  const store = initializeStore();

  const componentProps = await context.Component.getInitialProps({ ...context, store });
  return {
    pageProps: {
      ...componentProps,
      // Here will pass to page function
    },
    // initialReduxState: store.getState(),
  }
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};