import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BackgroundImage from '@/assets/images/background_2.png';

const WelcomeScreen = () => {
  return (
    <>
      <ImageBackground
        source={{
          uri: BackgroundImage,
        }}
        resizeMethod="resize"
      />
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
