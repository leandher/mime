import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Background from '../../components/Background';
import Header from '../../components/Header';
import usePersistedState from '../../hooks/usePersistedState';

import ActionButtons from './components/ActionButtons';
import ProgressBar from './components/ProgressBar';
import Rank from './components/Rank';
import styles from './styles';

const Game: React.FC = () => {
  const [duration] = usePersistedState<number>('duration');
  const [maxPoints] = usePersistedState<number>('maxPoints');
  const [isPlaying, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);

  const navigation = useNavigation();

  const handleNavigateBack = () => {
    navigation.goBack();
  };

  const handleCancel = () => {
    setPlaying(false);
  };

  return (
    <Background>
      <Header>
        <TouchableOpacity onPress={isPlaying ? handleCancel : handleNavigateBack}>
          <Feather name={isPlaying ? 'x' : 'arrow-left'} size={24} />
        </TouchableOpacity>
      </Header>
      <View style={styles.wordContainer}>
        <Text style={styles.team}>Equipe 1 - 10 pontos</Text>

        <Text style={styles.wordTitle}>Sua palavra é</Text>
        <Text style={styles.word}>Lorem ipsum</Text>

        <Text style={styles.category}>Ação</Text>
        <Text style={styles.wordPointValue}>5 pontos</Text>

        {!isPlaying && (
          <ActionButtons onPlay={() => setPlaying(true)} onRank={() => setOpen(true)} />
        )}
        {isPlaying && <ProgressBar time={duration || 30} onFinish={() => setPlaying(false)} />}
        <Rank open={open} onClose={() => setOpen(false)} />
      </View>
    </Background>
  );
};

export default Game;
