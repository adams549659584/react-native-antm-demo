import React, { Component } from 'react';
import { Image } from 'react-native';

export default class TabBarItemComponent extends Component {
    render() {
        const { focused, selectedImage, normalImage, tintColor } = this.props;
        return (
            <Image
                source={focused ? selectedImage : normalImage}
                style={{ tintColor: tintColor, width: 25, height: 25 }}
            />
        );
    }
}