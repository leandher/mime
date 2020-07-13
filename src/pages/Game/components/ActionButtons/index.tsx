import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import styles from './styles';

interface Props {
  onPlay(): void;
  onRank(): void;
}

const ActionButtons: React.FC<Props> = ({ onPlay, onRank }) => {
  return (
    <View style={styles.buttonGroup}>
      <TouchableOpacity onPress={onPlay}>
        <Feather name="play-circle" size={48} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPlay}>
        <Feather name="refresh-cw" size={48} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onRank}>
        <Feather name="menu" size={48} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPlay}>
        <Feather name="fast-forward" size={48} />
      </TouchableOpacity>
    </View>
  );
};

export default ActionButtons;
