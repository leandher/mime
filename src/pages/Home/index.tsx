import React from 'react';
import { SafeAreaView, Text, Image } from 'react-native';

import Button from '../../components/Button';

import styles from './styles';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mime</Text>
      <Image source={require('../../assets/home-background.png')} style={styles.image} />
      <Button onPress={() => {}}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </Button>
    </SafeAreaView>
  );
};

export default Home;
