import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  text: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 20,
    marginHorizontal: 4,
  },
  textValue: {
    fontSize: 20,
    fontFamily: 'Roboto_400Regular',
  },
  itemContainer: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 20,
    marginVertical: 8,
  },
  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },
  buttonGroup: {
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#FAF9FE',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    padding: 20,
    marginBottom: 16,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
