import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalContent: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 300,
    width: 300,
  },
  modalText: {
    fontSize: 24,
    fontFamily: 'Roboto_700Bold',
    textAlign: 'center',
  },
  modalInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    marginVertical: 36,
    padding: 8,
  },
  modalSlider: {
    width: 200,
    height: 40,
    marginTop: 36,
  },
  modalSliderValue: {
    marginBottom: 36,
    marginTop: 16,
    fontSize: 20,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    alignItems: 'center',
    width: '60%',
  },
  button: {
    padding: 8,
    marginRight: 8,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Roboto_700Bold',
  },
  save: {
    color: '#67e480',
  },
  close: {
    color: '#E96379',
  },
});
