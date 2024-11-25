import { StyleSheet } from 'react-native';

export const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  link: {
    marginTop: 10,
    color: '#6200ea',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
