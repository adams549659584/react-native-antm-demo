import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput, ScrollView, Image } from 'react-native';
import { Button, Toast } from 'antd-mobile';
import { AppRouteName } from './../../App';

const TEST_IMG = require('../../common/res/imgs/scrolltest.png')

export default class scrollViewPage extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { state, setParams } = navigation;
        return {
            title: '滚动视图'
            // header: null,
        }
    };


    render() {
        // const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>Scroll me plz</Text>
                <Image source={TEST_IMG} />
                <Image source={TEST_IMG} />
                <Image source={TEST_IMG} />
                <Image source={TEST_IMG} />
                <Image source={TEST_IMG} />
                <Text style={{ fontSize: 30 }}>If you like</Text>
                <Image source={TEST_IMG} />
                <Image source={TEST_IMG} />
                <Image source={TEST_IMG} />
                <Image source={TEST_IMG} />
                <Image source={TEST_IMG} />
                <Text style={{ fontSize: 30 }}>Scrolling down</Text>
                <Image source={TEST_IMG} />
                <Image source={TEST_IMG} />
                <Image source={TEST_IMG} />
                <Image source={TEST_IMG} />
                <Image source={TEST_IMG} />
                <Text style={{ fontSize: 30 }}>What's the best</Text>
                <Image source={TEST_IMG} />
                <Image source={TEST_IMG} />
                <Image source={TEST_IMG} />
                <Image source={TEST_IMG} />
                <Image source={TEST_IMG} />
                <Text style={{ fontSize: 30 }}>Framework around?</Text>
                <Image source={TEST_IMG} />
                <Image source={TEST_IMG} />
                <Image source={TEST_IMG} />
                <Image source={TEST_IMG} />
                <Image source={TEST_IMG} />
                <Text style={{ fontSize: 30 }}>React Native</Text>
            </ScrollView>
        );
    }
}
