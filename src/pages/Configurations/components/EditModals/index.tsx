import React, { useState, useEffect, useMemo } from 'react';
import { View, TextInput, Text, Modal, TouchableOpacity } from 'react-native';

import Slider from '@react-native-community/slider';

import type { EditKey } from '../..';

import styles from './styles';

interface Props {
  editKey: EditKey;
  duration: number;
  maxPoints: number;
  open: boolean;
  onClose(): void;
  addTeams(name: string): void;
  updateDuration(duration: number): void;
  updateMaxPoints(maxPoints: number): void;
}

const EditModals: React.FC<Props> = ({
  open,
  editKey,
  duration,
  maxPoints,
  onClose,
  addTeams,
  updateDuration,
  updateMaxPoints,
}) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [textValue, setTextValue] = useState('');

  const title = useMemo(() => {
    switch (editKey) {
      case 'duration':
        return 'Duração';
      case 'maxPoints':
        return 'Pontuação';
      case 'team':
        return 'Nova Equipe';
      default:
        return '';
    }
  }, [editKey]);

  const handleClose = () => {
    switch (editKey) {
      case 'duration':
        updateDuration(sliderValue);
        break;
      case 'maxPoints':
        updateMaxPoints(sliderValue);
        break;
      case 'team':
        addTeams(textValue);
        break;
      default:
        break;
    }
    onClose();
  };

  useEffect(() => {
    if (open) {
      switch (editKey) {
        case 'duration':
          setSliderValue(duration);
          break;
        case 'maxPoints':
          setSliderValue(maxPoints);
          break;
        case 'team':
          setTextValue('');
          break;
        default:
          break;
      }
    }
  }, [open, duration, editKey, maxPoints]);

  return (
    <Modal animationType="slide" visible={open} onRequestClose={onClose} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{title}</Text>
          {editKey === 'team' ? (
            <TextInput
              style={styles.modalInput}
              value={textValue}
              onChangeText={(text) => setTextValue(text)}
            />
          ) : (
            <>
              <Slider
                style={styles.modalSlider}
                step={5}
                minimumValue={30}
                maximumValue={120}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#E3e3e3"
                value={sliderValue}
                onValueChange={setSliderValue}
              />
              <Text style={styles.modalSliderValue}>{sliderValue}</Text>
            </>
          )}
          <View style={styles.modalButtons}>
            <TouchableOpacity onPress={handleClose} style={styles.button}>
              <Text style={[styles.save, styles.buttonText]}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose} style={styles.button}>
              <Text style={[styles.close, styles.buttonText]}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditModals;
