import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Header: React.FC = ({ children }) => {
  return (
    <View style={styles.header}>
      {children}
      <Text style={styles.title}>Mime</Text>
    </View>
  );
};

export default Header;
