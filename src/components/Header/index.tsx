import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Header: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleNavigateBack}>
        <Feather name="arrow-left" size={24} />
      </TouchableOpacity>
      <Text style={styles.title}>Mime</Text>
    </View>
  );
};

export default Header;
