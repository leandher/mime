import { useState, useEffect, Dispatch, SetStateAction } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState<T>(initialState);

  useEffect(() => {
    AsyncStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  useEffect(() => {
    const getValues = async () => {
      const storageValue = await AsyncStorage.getItem(key);

      if (storageValue) setState(JSON.parse(storageValue));
    };

    getValues();
  }, [key]);

  return [state, setState];
}

export default usePersistedState;
