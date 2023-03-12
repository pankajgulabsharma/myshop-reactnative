import React from 'react';
import {StyleSheet} from 'react-native';
import RootNavigation from './src/navigation/RootNavigation';

const App = () => {
  return <RootNavigation />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
