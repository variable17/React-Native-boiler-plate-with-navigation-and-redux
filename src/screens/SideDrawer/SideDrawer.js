import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class SideDrawer extends Component {
    render() {
        return (
            <View style={container}>
                <Text>Side Drawer</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 35,
    },
})

const { container } = styles;

export default SideDrawer;