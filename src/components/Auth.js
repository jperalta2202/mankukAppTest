import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {B2CClient} from './B2CClient';

import {b2cConfig, b2cScopes as scopes} from './msalConfig';

const b2cClient = new B2CClient(b2cConfig);

const Auth = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [authResult, setAuthResult] = useState(null);

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    async function init() {
      try {
        await b2cClient.init();
        const isSignedIn = await b2cClient.isSignedIn();
        if (isSignedIn) {
          setAuthResult(await b2cClient.acquireTokenSilent({scopes}));
        }
      } catch (error) {
        console.error(error);
      }
    }
    init();
  }, [isLogged, authResult]);

  const handleSignInPress = async () => {
    console.log('loggin');
    try {
      console.log({scopes});
      const res = await b2cClient.signIn({scopes});
      setAuthResult(res);
      setIsLogged(true);
      //await AsyncStorage.setItem('LOGGIN_INFO', JSON.stringify(res))
      alert('Ingreso éxitoso');
      navigation.navigate('Form');
    } catch (error) {
      console.warn(error);
    }
  };

  const handleSignOutPress = async () => {
    try {
      setAuthResult(null);
      setIsLogged(false);
      //await AsyncStorage.setItem('LOGIN_INFO', 'NULL')
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <>
      {!isLogged ? (
        <Button onPress={handleSignInPress} title="Login with Microsoft" />
      ) : (
        <>
          <Text>You are logged in</Text>
          <Button onPress={handleSignOutPress} title="Log Out" />
        </>
      )}
    </>
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

export default Auth;
