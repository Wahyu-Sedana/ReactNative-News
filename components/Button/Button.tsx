import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { buttonStyles } from './Button.styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
  outline?: boolean;
};

export default function Button({ title, onPress, outline = false }: ButtonProps) {
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
