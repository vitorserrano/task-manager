import * as React from 'react';
import { SafeAreaView } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 30 }}>
      <Routes />
    </SafeAreaView>
  );
}
