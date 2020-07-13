import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Background from '../../components/Background';
import Button from '../../components/Button';
import Header from '../../components/Header';

import styles from './styles';

const Configurations: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('Game');
  };

  return (
    <Background>
      <Header />
      <View style={styles.item}>
        <View style={styles.itemContainer}>
          <Feather name="clock" size={24} />
          <Text style={styles.text}>Duração:</Text>
          <Text style={styles.textValue}>60s</Text>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Feather name="edit-3" size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <View style={styles.itemContainer}>
          <Feather name="star" size={24} />
          <Text style={styles.text}>Pontuação:</Text>
          <Text style={styles.textValue}>70 pontos</Text>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Feather name="edit-3" size={24} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Equipes</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[0, 1, 2]}
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
            <TouchableOpacity onPress={() => {}}>
              <Feather name="x" size={24} color="#d90429" />
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.buttonGroup}>
        <Button onPress={() => {}}>
          <Text style={styles.buttonText}>Adicionar Equipe</Text>
        </Button>

        <Button onPress={handleNavigation}>
          <Text style={styles.buttonText}>Próximo</Text>
        </Button>
      </View>
    </Background>
  );
};

export default Configurations;
