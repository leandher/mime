import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Background from '../../components/Background';
import Header from '../../components/Header';

import ActionButtons from './components/ActionButtons';
import ProgressBar from './components/ProgressBar';
import styles from './styles';

const Game: React.FC = () => {
  const [isPlaying, setPlaying] = useState(false);

  return (
    <Background>
      <Header />
      <View style={styles.wordContainer}>
        <Text style={styles.wordTitle}>Sua palavra é</Text>
        <Text style={styles.wordTitle}>Lorem ipsum dolor sit amet</Text>

        <Text style={styles.wordPointTitle}>Valendo</Text>
        <Text style={styles.wordPointValue}>5 pontos</Text>

        {!isPlaying && <ActionButtons handlePlay={() => setPlaying((state) => !state)} />}
        {isPlaying && <ProgressBar time={30} handleFinish={() => setPlaying((state) => !state)} />}
      </View>
    </Background>
  );
};

export default Game;
