import React, { useRef, useState, useEffect, useMemo } from 'react';
import { View, StyleSheet, Animated, Text } from 'react-native';

import useInterval from '../../../../hooks/useInterval';

import styles from './styles';

interface Props {
  handleFinish(): void;
  time: number;
}

const ProgressBar: React.FC<Props> = ({ handleFinish, time }) => {
  const animation = useRef(new Animated.Value(time));
  const [progress, setProgress] = useState(time - 1);

  useInterval(() => {
    if (progress > 0) {
      setProgress(progress - 1);
    } else {
      handleFinish();
    }
  }, 1000);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: 0,
      duration: 1000 * time,
      useNativeDriver: false,
    }).start();
  }, [time]);

  const width = useMemo(
    () =>
      animation.current.interpolate({
        inputRange: [0, time],
        outputRange: ['0%', '100%'],
        extrapolate: 'clamp',
      }),
    [time],
  );

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <Animated.View style={[[StyleSheet.absoluteFill], { backgroundColor: '#333', width }]} />
      </View>
      <Text style={styles.timeText}>{`Faltam ${progress}s`}</Text>
    </View>
  );
};

export default ProgressBar;
