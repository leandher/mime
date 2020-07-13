import React from 'react';
import { TouchableHighlight } from 'react-native';

import styles from './styles';

interface Props {
  onPress(): void;
}

const Button: React.FC<Props> = ({ onPress, children }) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.button}>
      {children}
    </TouchableHighlight>
  );
};

export default Button;
