import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from '@src/navigation/routes';
import { Text, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider style={{ backgroundColor: '#fff' }}>
      <Routes />
    </SafeAreaProvider>
  );
};

export default App;
