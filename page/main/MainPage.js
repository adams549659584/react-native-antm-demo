import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { Button, Toast, Flex } from 'antd-mobile';
import SearchPage from './../search/SearchPage';
import { AppRouteName } from './../../App';

export default class MainPage extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { state, setParams } = navigation;
        return {
            // title: '首页'
            header: null,
        }
    };

    goSearch = () => {
        const { navigate } = this.props.navigation;
        navigate(AppRouteName.Search);
    }

    goFlexbox = () => {
        const { navigate } = this.props.navigation;
        navigate(AppRouteName.Flexbox);
    }

    render() {

        return (
            <View style={styles.container}>
                <Button onClick={this.goSearch}>搜索</Button>
                <Button onClick={this.goFlexbox}>Flexbox</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
});

