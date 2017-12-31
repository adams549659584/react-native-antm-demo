import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'antd-mobile';
import { StackNavigator } from 'react-navigation';
import MainPage from './page/main/MainPage';
import SearchPage from './page/search/SearchPage';

const SimpleApp = StackNavigator({
  Main: { screen: MainPage },
  Search: { screen: SearchPage }
})

export default class App extends React.Component {
  render() {
    return (
      <SimpleApp />
    );
  }
}
