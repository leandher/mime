import React from 'react';
import { SafeAreaView, Text, Image, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import styles from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('Configurations');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mime</Text>
      <Image
        source={require('../../assets/home-background.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={{ marginBottom: 24 }}>
        <Button onPress={handleNavigation}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Home;
