import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 36,
  },
  timeText: {
    fontSize: 18,
    marginTop: 16,
    fontFamily: 'Roboto_500Medium',
  },
  progressBar: {
    flexDirection: 'row',
    height: 15,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
  },
});
