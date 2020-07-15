import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';

import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import { Game as GameType } from '../../@types/game';
import Background from '../../components/Background';
import Header from '../../components/Header';
import api from '../../services/api';

import ActionButtons from './components/ActionButtons';
import ProgressBar from './components/ProgressBar';
import Rank from './components/Rank';
import styles from './styles';

interface WordResponse {
  name: string;
  category: string;
  value: number;
}

const Game: React.FC = () => {
  const [game, setGame] = useState<GameType | null>(null);
  const [isPlaying, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const [teamPlaying, setTeamPlaying] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [word, setWord] = useState('');
  const [category, setCategory] = useState('');
  const [point, setPoint] = useState(0);

  const navigation = useNavigation();

  const handleNavigateBack = useCallback(async () => {
    await AsyncStorage.setItem('@game', JSON.stringify({}));
    navigation.navigate('Home');
  }, [navigation]);

  const handleGoBack = () => {
    Alert.alert('Você deseja voltar? Seu progresso será perdido!', '', [
      { text: 'Ok', onPress: () => handleNavigateBack() },
      { text: 'Cancelar', onPress: () => false },
    ]);
  };

  const handleCancel = () => {
    setPlaying(false);
  };

  const loadWord = () => {
    setIsLoading(true);
    api
      .get<WordResponse>('words/random')
      .then(({ data }) => {
        setCategory(data.category);
        setWord(data.name);
        setPoint(data.value);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const handleChangeTeam = () => {
    if (teamPlaying + 1 === game?.teams.length) setTeamPlaying(0);
    else setTeamPlaying((state) => state + 1);
    loadWord();
  };

  const handleRight = async () => {
    setPlaying(false);
    if (game?.teams) {
      const team = game.teams[teamPlaying];
      team.points += point;

      if (team.points >= game.maxPoints) {
        Alert.alert('Vencedor', team.name, [{ text: 'Ok', onPress: () => handleNavigateBack() }]);
      } else {
        setGame({ ...game, teams: [...game.teams] });
        await AsyncStorage.setItem('@game', JSON.stringify({ ...game, teams: [...game.teams] }));
        handleChangeTeam();
      }
    }
  };

  const handleWrong = () => {
    setPlaying(false);
    handleChangeTeam();
  };

  useEffect(() => {
    const getStoredGame = async () => {
      const storedGame = await AsyncStorage.getItem('@game');

      if (storedGame) {
        const parsedGame: GameType = JSON.parse(storedGame);

        if (!parsedGame?.teams.length) navigation.goBack();
        else setGame(parsedGame);
      }
    };

    getStoredGame();
  }, [navigation]);

  useEffect(() => {
    loadWord();
  }, []);

  return (
    <Background>
      <Header>
        <TouchableOpacity onPress={isPlaying ? handleCancel : handleGoBack}>
          <Feather name={isPlaying ? 'x' : 'arrow-left'} size={24} />
        </TouchableOpacity>
      </Header>
      <View style={styles.wordContainer}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            <Text style={styles.team}>
              {`${game?.teams[teamPlaying]?.name} - ${game?.teams[teamPlaying]?.points} pontos`}
            </Text>

            <Text style={styles.wordTitle}>Sua palavra é</Text>
            <Text style={styles.word}>{word}</Text>

            <Text style={styles.category}>{category}</Text>
            <Text style={styles.wordPointValue}>{`${point} pontos`}</Text>
            {!isPlaying && (
              <ActionButtons
                onPlay={() => setPlaying(true)}
                onRank={() => setOpen(true)}
                onRefresh={loadWord}
                onChangeTeam={handleChangeTeam}
              />
            )}
            {isPlaying && (
              <ProgressBar
                time={game?.duration || 30}
                onRight={handleRight}
                onWrong={handleWrong}
              />
            )}
          </>
        )}
        <Rank open={open} onClose={() => setOpen(false)} teams={game?.teams || []} />
      </View>
    </Background>
  );
};

export default Game;
