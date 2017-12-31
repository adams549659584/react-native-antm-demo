import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { Button, Toast } from 'antd-mobile';
import SearchPage from './../search/SearchPage';

export default class MainPage extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { state, setParams } = navigation;
        
        return {
            // title: '首页'
            header: null,
        }
    };

    goSearch = () => {
        Toast.info('去搜索', Toast.SHORT);
    }

    render() {
        // const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Open up Main.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
                <Button onClick={this.goSearch}>去搜索</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
});

