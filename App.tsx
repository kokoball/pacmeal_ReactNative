import 'react-native-gesture-handler';
import React, { useState, useCallback } from 'react';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import MainNavigator from './src/screens/MainNavigator';

enableScreens();

export default function App() {

  return (
    <AppearanceProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
    </AppearanceProvider>
  );
}
