import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput } from 'react-native';
import { Button, Toast } from 'antd-mobile';
import { AppRouteName } from './../../App';

export default class TextInputPage extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { state, setParams } = navigation;
        return {
            title: '用户输入'
            // header: null,
        }
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            text: ''
        }
    }


    render() {
        // const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, padding: 10 }}>
                <TextInput style={{ height: 40 }} placeholder="Type here to tanslate" onChangeText={(text) => {
                    this.setState({ text })
                }} />
                <Text style={{ padding: 10, fontSize: 42 }}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}
