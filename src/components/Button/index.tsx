import React from 'react';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

interface Props {
  onPress(): void;
}

const Button: React.FC<Props> = ({ onPress, children }) => {
  return (
    <RectButton onPress={onPress} style={styles.button}>
      {children}
    </RectButton>
  );
};

export default Button;
