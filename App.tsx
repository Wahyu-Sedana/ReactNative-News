import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './navigation/AuthNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
}
