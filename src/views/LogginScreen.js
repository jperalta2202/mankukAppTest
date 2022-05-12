import React, {useState} from 'react';

import {View, StyleSheet, Image} from 'react-native';

import Auth from '../components/Auth';

const styles = StyleSheet.create({
  form: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  formInput: {
    margin: 10,
  },
  image: {
    resizeMode: 'contain',
    width: 400,
    height: 200,
  },
});

const LogginScreen = ({navigation}) => {
  const logo = require('./../../assets/Logotipo_Sin_Fondo_Mankuk.png');

  return (
    <View style={styles.form}>
      <Image source={logo} style={styles.image} />
      <Auth navigation={navigation} />
    </View>
  );
};
export default LogginScreen;
