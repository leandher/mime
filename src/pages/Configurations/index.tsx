import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import { Team } from '../../@types/team';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Header from '../../components/Header';
import usePersistedState from '../../hooks/usePersistedState';

import EditModals from './components/EditModals';
import styles from './styles';

export type EditKey = 'team' | 'duration' | 'maxPoints' | '';

const Configurations: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [editKey, setEditKey] = useState<EditKey>('');
  const [duration, setDuration] = usePersistedState<number>('duration', 60);
  const [maxPoints, setMaxPoints] = usePersistedState<number>('maxPoints', 60);
  const [teams, setTeams] = useState<Team[]>([]);

  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('Game');
  };

  const handleNavigateBack = () => {
    navigation.goBack();
  };

  const handleOpenModal = (key: EditKey) => {
    setEditKey(key);
    setOpen(true);
  };

  const addTeam = (name: string) => {
    const id = Date.now();

    const newTeams = [...(teams || []), { id, name, points: 0 }];

    setTeams(newTeams);

    AsyncStorage.setItem('teams', JSON.stringify(newTeams));
  };

  const removeTeam = (id: number) => {
    const newTeams = teams?.filter((team) => team.id !== id);

    setTeams(newTeams);

    AsyncStorage.setItem('teams', JSON.stringify(newTeams));
  };

  useEffect(() => {
    const getStoreValue = async () => {
      const storedTeams = await AsyncStorage.getItem('teams');
      if (storedTeams) setTeams(JSON.parse(storedTeams));
    };

    getStoreValue();
  }, []);

  return (
    <>
      <Background>
        <Header>
          <TouchableOpacity onPress={handleNavigateBack}>
            <Feather name="arrow-left" size={24} />
          </TouchableOpacity>
        </Header>
        <View style={styles.item}>
          <View style={styles.itemContainer}>
            <Feather name="clock" size={24} />
            <Text style={styles.text}>Duração:</Text>
            <Text style={styles.textValue}>{`${duration}s`}</Text>
          </View>
          <TouchableOpacity onPress={() => handleOpenModal('duration')}>
            <Feather name="edit-3" size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <View style={styles.itemContainer}>
            <Feather name="star" size={24} />
            <Text style={styles.text}>Pontuação:</Text>
            <Text style={styles.textValue}>{`${maxPoints} pontos`}</Text>
          </View>
          <TouchableOpacity onPress={() => handleOpenModal('maxPoints')}>
            <Feather name="edit-3" size={24} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Equipes</Text>
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
              <TouchableOpacity onPress={() => removeTeam(team.id)}>
                <Feather name="x" size={24} color="#d90429" />
              </TouchableOpacity>
            </View>
          )}
        />

        <View style={styles.buttonGroup}>
          <Button onPress={() => handleOpenModal('team')}>
            <Text style={styles.buttonText}>Adicionar Equipe</Text>
          </Button>

          <Button onPress={handleNavigation}>
            <Text style={styles.buttonText}>Próximo</Text>
          </Button>
        </View>
      </Background>
      <EditModals
        editKey={editKey}
        duration={duration || 0}
        maxPoints={maxPoints || 0}
        open={open}
        onClose={() => setOpen(false)}
        addTeams={addTeam}
        updateDuration={setDuration}
        updateMaxPoints={setMaxPoints}
      />
    </>
  );
};

export default Configurations;
