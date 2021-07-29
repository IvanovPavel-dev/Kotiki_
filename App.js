//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, } from 'react-native';
import MainStack from './navigate'
import Favorites from './components/Favorites'

export default function App() {

  return (
    <MainStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: '#a4d8fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    borderRadius: 50
  },
});
