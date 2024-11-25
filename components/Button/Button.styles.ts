import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#6200ea',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonOutline: {
    height: 50,
    borderWidth: 1,
    borderColor: '#6200ea',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonOutlineText: {
    color: '#6200ea',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
