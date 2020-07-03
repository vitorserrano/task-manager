import * as React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import FlashMessage from "react-native-flash-message";

import Routes from './src/routes';

export default function App() {
  console.disableYellowBox = true;

  return (
    <>
    <StatusBar
      backgroundColor="#7750fc"
      translucent
      barStyle="light-content"
    />
      <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
        <Routes />
        <FlashMessage position="bottom" />
      </SafeAreaView>
    </>
  );
}
