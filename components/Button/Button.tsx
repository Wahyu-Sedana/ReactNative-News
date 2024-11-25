import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
  outline?: boolean;
};

const Button = ({ title, onPress, outline = false }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={outline ? buttonStyles.buttonOutline : buttonStyles.button}
      onPress={onPress}
    >
      <Text style={outline ? buttonStyles.buttonOutlineText : buttonStyles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const buttonStyles = StyleSheet.create({
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

export default Button;
