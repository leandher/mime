import { useState, useEffect, Dispatch, SetStateAction } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState?: T): Response<T | undefined> {
  const [state, setState] = useState<T>();

  useEffect(() => {
    const update = async () => {
      if (state !== undefined && state !== null)
        await AsyncStorage.setItem(key, JSON.stringify(state));
    };

    update();
  }, [key, state]);

  useEffect(() => {
    const getValues = async () => {
      const storageValue = await AsyncStorage.getItem(key);

      if (storageValue) setState(JSON.parse(storageValue));
      else setState(initialState);
    };

    getValues();
  }, [initialState, key]);

  return [state, setState];
}

export default usePersistedState;
