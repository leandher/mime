import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : 36,
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
});
