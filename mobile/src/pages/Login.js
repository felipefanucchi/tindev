import React from 'react';

import { Text, StyleSheet, Image, TextInput, TouchableOpacity, View } from 'react-native';

import logo from '../assets/logo.png';

function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.panel}>
                <Image source={logo}/>
                <TextInput 
                    placeholder="Digite seu usuário do github."
                    placeholderTextColor="#999"
                    style={styles.input}
                ></TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#387780',
        justifyContent: 'center',
        alignItems: 'center',
    },

    input: {
        borderColor: '#eee',
        borderWidth: 1,
        color: '#999',
        borderRadius: 4,
        height: 46,
        paddingHorizontal: 10,
        alignSelf: 'stretch',
        marginTop: 20
    },  

    button: {
        height: 46,
        borderRadius: 4,
        backgroundColor: '#DF4723',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },

    panel: {
        padding: 20,
        borderRadius: 4,
        backgroundColor: '#FFF',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default Login;