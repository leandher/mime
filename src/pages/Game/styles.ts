import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wordContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wordTitle: {
    fontSize: 36,
    fontFamily: 'Roboto_700Bold',
    marginBottom: 36,
  },
  wordPointTitle: {
    fontSize: 18,
    fontFamily: 'Roboto_400Regular',
  },
  wordPointValue: {
    fontSize: 24,
    fontFamily: 'Roboto_700Bold',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 36,
  },
});
