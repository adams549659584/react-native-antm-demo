import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'antd-mobile';
import { StackNavigator } from 'react-navigation';
import MainPage from './page/main/MainPage';
import SearchPage from './page/search/SearchPage';

export const AppRouteName = {
  Main: 'Main',
  Search: 'Search'
}

const AppNavigator = StackNavigator({
  [AppRouteName.Main]: { screen: MainPage },
  [AppRouteName.Search]: { screen: SearchPage }
})

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
