import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Flex, WingBlank, WhiteSpace, SearchBar } from 'antd-mobile';
import SearchStore from './stores/SearchStore';

export default class SearchPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      value: '',
      placeholder: '金戈5片送1片',
      dataSource: []
    }
  }

  onSubmit = (value) => {
    SearchStore.searchPanGuWord(value).then((res) => {
      this.setState({
        dataSource: res
      })
    })
  }

  onClear = () => {
    this.setState({ value: '' });
  }

  onFocus = () => {
    this.setState({ value: '' });
  }

  onBlur = (val) => {
    // this.onChange(val)
  }

  onCancel = (val) => {
    this.onSubmit(val);
  }

  onChange = (value) => {
    SearchStore.searchPanGuWord(value).then((res) => {
      this.setState({
        value,
        dataSource: res
      })
    })
  }

  render() {
    const { value, placeholder } = this.state;
    return (
      <View style={styles.container}>
        <Flex>
          <Flex.Item>
            <SearchBar
              value={value}
              placeholder={placeholder}
              onSubmit={value => this.onSubmit}
              onClear={value => this.onClear}
              onFocus={() => this.onFocus}
              onBlur={() => this.onBlur}
              onCancel={() => this.onCancel}
              showCancelButton
              onChange={this.onChange}
            /></Flex.Item>
        </Flex>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
