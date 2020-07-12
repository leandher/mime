import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import styles from './styles';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mime</Text>
    </SafeAreaView>
  );
};

export default Home;
