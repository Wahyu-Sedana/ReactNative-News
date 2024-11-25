import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

type InputProps = TextInputProps & {
  value: string;
  onChangeText: (text: string) => void;
};

export default function Input({ value, onChangeText, ...props }: InputProps) {
  return <TextInput style={styles.input} value={value} onChangeText={onChangeText} {...props} />;
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
});
