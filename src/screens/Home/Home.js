import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Hulk from '../../assets/Hulk.jpg';
import Morning from '../../assets/morning.png';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left",
                })
            }
        }
    }

    render() {
        return (
            <View style={container}>
                <Text>Home</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    textStyle: {
        marginTop: "7%",
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
    },

    topContainer: {
        flex: .3,
        backgroundColor: '#e57373',
        // borderWidth: 1,
    },

    image: {
        marginTop: "5%",
        alignSelf: 'center',
        height: 120,
        width: 120,
        borderRadius: 60,
        // borderWidth: 1,
    },

    adherenceContainer: {
        flex: .3,
        marginTop: "20%",
        // borderWidth: 1,
    },

    adherenceText: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },

    boxContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: '3%',
        justifyContent: 'space-around',
    },

    box1: {
        width: '25%',
        height: '100%',
        marginTop: 10,
        backgroundColor: '#4db6ac',
    },

    text1: {
        color: 'white',
        textAlign: 'center',
        fontSize: 40,
        paddingTop: '10%',
    },

    box2: {
        width: '25%',
        height: '100%',
        marginTop: 10,
        backgroundColor: '#ffb74d',
    },

    text2: {
        color: 'white',
        textAlign: 'center',
        fontSize: 40,
        paddingTop: '10%',
    },

    box3: {
        width: '25%',
        height: '100%',
        marginTop: 10,
        backgroundColor: '#ff5252',
    },

    text3: {
        color: 'white',
        textAlign: 'center',
        fontSize: 40,
        paddingTop: '10%',
    },

    doseTimeText: {
        // marginTop: '20%',
        textAlign: 'center',
    },

    nextDoseContainer: {
        marginTop: '5%',
        flex: 0.4,
        // borderWidth: 1,
    },

    doseContainers: {
        flexDirection: 'row',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '5%',
        justifyContent: 'space-around',
        borderWidth: 1,
    },

    doseDetail: {
        // borderWidth: 1,
        paddingLeft: '3%',
        flex: .6,
        height: 110,
    },

    date: {
        paddingTop: '2%',
        fontWeight: 'bold',
    },

    day: {
        fontWeight: 'normal',
        fontSize: 13,
    },

    time: {
        fontWeight: 'bold',
    },

    direction: {
        fontWeight: 'normal',
        fontStyle: 'italic',
    },

    medTab: {
        fontSize: 11,
    },

    timePic: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 15,
        flex: .3,
        height: 110,
    }

})

const { container, textStyle, topContainer, imageContainer,
        image, adherenceContainer, adherenceText, boxContainer,
        box1, text1, box2, text2, box3, text3, doseTimeText,
        nextDoseContainer, doseContainers, doseDetail,
        date, day, time, direction, medTab, timePic } = styles;

export default HomeScreen;