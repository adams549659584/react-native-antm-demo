import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { Button, Toast } from 'antd-mobile';
import { AppRouteName } from './../../App';

export default class FlexboxPage extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { state, setParams } = navigation;
        return {
            title: 'Flexbox布局'
            // header: null,
        }
    };

    render() {
        // const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <View style={{ width: 50, height: 50, backgroundColor: '#000' }}></View>
                <View style={{ width: 50, height: 50, backgroundColor: '#0049ff' }}></View>
                <View style={{ width: 50, height: 50, backgroundColor: '#123' }}></View>
            </View>
        );
    }
}
