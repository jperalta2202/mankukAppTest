import React, {useEffect, useState} from 'react';
import PublicClientApplication from 'react-native-msal';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {B2CClient} from './B2CClient';

import {b2cConfig, b2cScopes as scopes} from './msalConfig';

const b2cClient = new B2CClient(b2cConfig);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [authResult, setAuthResult] = useState(null);
  /*   const config = {
    auth: {
      clientId: 'f94ac460-560f-48f2-957e-d7e8a2877f0b',
      authority:
        'https://mankukb2c.b2clogin.com/tfp/mankukb2c.onmicrosoft.com/B2C_1_SISOPolicy',
    },
  };
  const scopes = ['https://mankukb2c.onmicrosoft.com/mankuk-api/api.read'];

  // Initialize the public client application:
  const pca = new PublicClientApplication(config); */

  useEffect(() => {
    async function init() {
      try {
        console.log('hola1');
        await b2cClient.init();
        console.log('hola2');
        /* const isSignedIn = await b2cClient.isSignedIn();
        console.log('hola3');
        if (isSignedIn) {
          setAuthResult(await b2cClient.acquireTokenSilent({scopes}));
        } */
      } catch (error) {
        console.error(error);
      }
    }
    init();
  }, []);

  /*   useEffect(() => {
    async function init() {
      try {
        await pca.init();
        await pca.acquireToken(scopes);
      } catch (error) {
        console.error('Error initializing the pca, check your config.', error);
      }
    }
    init();
  }, []); */

  const handleSignInPress = async () => {
    try {
      console.log({scopes});
      const res = await b2cClient.signIn({scopes});
      setAuthResult(res);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Button onPress={handleSignInPress} title="test" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;