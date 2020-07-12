import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { VampiroOne_400Regular } from '@expo-google-fonts/vampiro-one';

import { AppLoading } from 'expo';

import Routes from './src/routes';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    VampiroOne_400Regular,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
};

export default App;
