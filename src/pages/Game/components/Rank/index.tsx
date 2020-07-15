import React from 'react';
import { View, Modal, Text, FlatList, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { Team } from '../../../../@types/team';
import Header from '../../../../components/Header';

import styles from './styles';

interface Props {
  open: boolean;
  onClose(): void;
  teams: Team[];
}

const Rank: React.FC<Props> = ({ open, onClose, teams }) => {
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
          data={teams}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item: team }) => (
            <View style={styles.item}>
              <View style={styles.itemContainer}>
                <Feather name="users" size={24} />
                <Text style={styles.text}>{team.name}</Text>
              </View>
              <Text style={styles.pointsValue}>{`${team.points} pontos`}</Text>
            </View>
          )}
        />
      </View>
    </Modal>
  );
};

export default Rank;
