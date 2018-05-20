import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, StyleSheet, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import axios from 'axios';


import startMainTabs from '../MainTabs/startMainTabs';
import Logo from '../../assets/Caredose.png';

class AuthScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    loginHandler = () => {
        // startMainTabs();
    }

    render() {
        return (
            <KeyboardAvoidingView style={container} behavior="padding" enabled>

                <View style={logoContainer}>
                    <Image source={Logo}/>
                </View>
        
                <View style={textInputContainer}>
                    <TextInput
                        style={textInput}
                        placeholder="Login Id"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(email) => this.setState({email})}
                    />
                    <TextInput 
                        style={textInput}
                        secureTextEntry
                        placeholder="Password"
                        onChangeText={(password) => this.setState({password})}
                    />        
                </View>
        
                <TouchableOpacity onPress={this.loginHandler}>
                    <View style={ button }>
                        <Text style={buttonText}>Login</Text>
                    </View>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff59d',
    },

    logoContainer: {
        marginTop: -60,
    },

    textInputContainer: {
        marginTop: -40,
        width: "80%",
        marginBottom: 20,
    
    },

    textInput: {
        height: 40,
        textAlign: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 50,
         
    },

    button: {
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 50,
    },

    buttonText: {
        color: 'white',
        fontWeight: '700',
    }

})

const { container, logoContainer, textInputContainer, textInput, button, buttonText } = styles;

export default AuthScreen;