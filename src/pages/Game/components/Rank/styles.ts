import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 24,
    paddingHorizontal: 24,
    backgroundColor: '#FAF9FE',
  },
  text: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 20,
    marginHorizontal: 4,
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
    alignItems: 'center',
  },

  itemContainer: {
    flexDirection: 'row',
  },

  pointsValue: {
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
  },
});
