import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'antd-mobile';
import { StackNavigator } from 'react-navigation';
import MainPage from './page/main/MainPage';
import SearchPage from './page/search/SearchPage';
import FlexboxPage from './page/flexbox/FlexboxPage';
import TextInputPage from './page/textInput/TextInputPage';
import scrollViewPage from './page/scrollView/scrollViewPage';
import ListViewPage from './page/listView/ListViewPage';

export const AppRouteName = {
  Main: 'Main',
  Search: 'Search',
  Flexbox: 'Flexbox',
  TextInput: 'TextInput',
  ScrollView: 'ScrollView',
  ListView: 'ListView',
}

const AppNavigator = StackNavigator({
  // [AppRouteName.Main]: { screen: MainPage },
  // [AppRouteName.Search]: { screen: SearchPage },
  // [AppRouteName.Flexbox]: { screen: FlexboxPage },
  // [AppRouteName.TextInput]: { screen: TextInputPage },
  // [AppRouteName.ScrollView]: { screen: scrollViewPage },
  [AppRouteName.ListView]: { screen: ListViewPage },
})

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
