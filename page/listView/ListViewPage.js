import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput, ScrollView, Image, FlatList } from 'react-native';
import { Button, Toast } from 'antd-mobile';
import { AppRouteName } from './../../App';



export default class ListViewPage extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { state, setParams } = navigation;
        return {
            title: '长列表'
            // header: null,
        }
    };

    renderItem = (item) => {
        return (
            <Text style={{ padding: 10, fontSize: 30, height: 44 }}>{item.text}</Text>
        )
    }

    render() {
        const data = [];
        for (let i = 0; i < 10; i++) {
            data.push({
                key: new Array(10).fill('0').join('') + i.toString(),
                text: new Array(10).fill('0').join('') + i.toString(),
            });
        }
        return (
            <View style={{ flex: 1, paddingTop: 22 }}>
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}
