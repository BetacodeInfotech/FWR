import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Btn({ Press }){

    return (

        <TouchableOpacity onPress={Press} style={styles.btn}>
            <View>
                <Image style={styles.img} source={require('../Assets/Images/google.png')} />
                <Text style={styles.txt}> Continue with Google</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({

    img: {
        padding: 20,
        margin: 7,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        position: 'absolute',
        alignSelf: 'auto'
    },

    btn: {
        backgroundColor: 'white',
        borderRadius: 8,
        height: 55,
        margin: 10,
        width: 375,
        paddingLeft: 35,
        marginHorizontal: 18,
    },

    txt: {
        color: '#777',
        fontSize: 23,
        fontWeight: '400',
        textAlign: 'center',
        paddingTop: 10,

    }
});
