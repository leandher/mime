import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import Background from '../../components/Background';
import Header from '../../components/Header';

import styles from './styles';

const Game: React.FC = () => {
  return (
    <Background>
      <Header />
      <View style={styles.wordContainer}>
        <Text style={styles.wordTitle}>Sua palavra é</Text>
        <Text style={styles.wordTitle}>Lorem ipsum dolor sit amet</Text>

        <Text style={styles.wordPointTitle}>Valendo</Text>
        <Text style={styles.wordPointValue}>5 pontos</Text>

        <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={() => {}}>
            <Feather name="play-circle" size={48} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Feather name="refresh-cw" size={48} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Feather name="menu" size={48} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Feather name="fast-forward" size={48} />
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

export default Game;
