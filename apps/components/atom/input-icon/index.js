import React from 'react';
import { View, TextInput, Button, Image, StyleSheet } from "react-native";
import { Icon } from "react-native-vector-icons";

const styles = StyleSheet.create({
    iconSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    icon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
})

const InputIcon = ({ icon }) => {
    return <View style={styles.iconSection}>
        <Icon style={styles.icon} name={icon} size={20} color="#000" />
        <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
        // {...prop}
        />
    </View>
}

export default InputIcon