import React, {useState} from 'react';

import {View, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  form: {
    margin: 200,
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  formInput: {
    margin: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
    alignItems: 'center',
  },
});

const LoginScreen = ({navigation}) => {
  const logo = require('./../../assets/logotipo_alta_Mankuk.jpg');

  return (
    <View style={styles.form}>
      <Image source={logo} style={styles.image} />
    </View>
  );
};
export default LoginScreen;
