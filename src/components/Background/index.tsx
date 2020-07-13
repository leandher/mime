import React from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';

import styles from './styles';

const Background: React.FC = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.image} source={require('../../assets/bg.png')}>
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Background;
