import { StatusBar } from 'react-native';
import { Home } from './src/screens/home';
import React from 'react';


export default function App() {
  return(
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}
