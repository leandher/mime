import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import styles from './styles';

interface Props {
  handlePlay(): void;
}

const ActionButtons: React.FC<Props> = ({ handlePlay }) => {
  return (
    <View style={styles.buttonGroup}>
      <TouchableOpacity onPress={handlePlay}>
        <Feather name="play-circle" size={48} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePlay}>
        <Feather name="refresh-cw" size={48} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePlay}>
        <Feather name="menu" size={48} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePlay}>
        <Feather name="fast-forward" size={48} />
      </TouchableOpacity>
    </View>
  );
};

export default ActionButtons;
