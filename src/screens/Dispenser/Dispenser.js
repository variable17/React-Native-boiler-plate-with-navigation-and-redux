import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class DispenserScreen extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

        this.state = {
            days: 15,
        }
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

        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9' , '10', '11', '12', '13', '14', '15',
                        '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
        const pickers = numbers.map(num => (<Picker.Item key={num} label={num} value={num} />));

        return (
            <View style={container}>
                <Text style={holidayModeText}>Holiday Mode</Text>
                <View style={holidayContainer}>

                <View style={rowContainer}>

                    <View style={pickerContainer}>
                        <Picker
                            selectedValue={this.state.days}
                            style={pickerStyle}
                            onValueChange={(itemValue, itemIndex) => this.setState({days: itemValue})}>
                            {pickers}
                        </Picker>
                    </View>

                    <View style={daysContainer}>
                        <Text style={daysText}>Days</Text>
                    </View>

                    <View style={holidayCheckContainer}>
                        <TouchableOpacity>
                            <View style={holidayButton}>
                                <Icon size={50} name="ios-car" color="white" />
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

                </View>

                <View style={dispatcher}>
                    <TouchableOpacity>
                        <Icon size={150} name="ios-download-outline" color="green" />
                    </TouchableOpacity>
                    <Text style={returnPouchText}>Return Single Pouch</Text>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        // borderWidth: 1,
    },

    holidayContainer: {
        flex: 0.4,
        // justifyContent: 'space-between',
        // borderBottomWidth: 1,
        // marginTop: '20%',

    },

    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '10%',
        // alignItems: 'center',
    },

    holidayModeText: {
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
        paddingTop: '5%',
    },

    pickerContainer: {
        flex: 0.3,
        marginTop: '-24%',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
    },

    pickerStyle: {
        height: 50,
        width: 75,
    },

    daysContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
    },

    holidayCheckContainer: {
        flex: 0.3,
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    holidayButton: {
        // borderWidth: 1,
        borderRadius: 50,
        width: 100,
        alignItems: 'center',
        backgroundColor: 'green',
    },

    daysText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },

    dispatcher: {
        flex: 0.4,
        // borderTopWidth: 1,
        // borderTopColor: 'grey',
        // marginTop: '20%',
        alignItems: 'center',
    },

    returnPouchText: {
        fontSize: 20,
        // marginTop: -20,
        fontWeight: 'bold',
    }
})

const { container, holidayContainer, rowContainer, holidayModeText, pickerContainer,
        pickerStyle, daysContainer, holidayCheckContainer, holidayButton,
        daysText, dispatcher, returnPouchText } = styles;

export default DispenserScreen;