import React from 'react';
import { View, Modal, Text, FlatList, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import Header from '../../../../components/Header';

import styles from './styles';

interface Props {
  open: boolean;
  onClose(): void;
}

const Rank: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Modal animationType="slide" visible={open} onRequestClose={onClose} statusBarTranslucent>
      <View style={styles.container}>
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Feather name="x" size={24} />
          </TouchableOpacity>
        </Header>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={[0, 1]}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.itemContainer}>
                <Feather name="users" size={24} />
                <Text style={styles.text}>
                  Equipe_
                  {item}
                </Text>
              </View>
              <Text style={styles.pointsValue}>35 pontos</Text>
            </View>
          )}
        />
      </View>
    </Modal>
  );
};

export default Rank;
