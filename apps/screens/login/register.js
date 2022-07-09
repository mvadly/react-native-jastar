import React from 'react';
import { View, Text, TextInputComponent, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";
import appItem from '../../../app.json'
const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: appItem.colorTheme,
        minWidth: "100%",
        marginBottom: 20,
        paddingHorizontal: 20,
        borderRadius: 30,
        fontSize: 17,
        backgroundColor: "white"
    },
    appTitle: {
        textAlign: "center",
        marginBottom: 20,
        fontSize: 30,
        fontWeight: "bold",
        color: appItem.colorTheme
    }
})

const Register = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ paddingHorizontal: 20 }}>
                <View>
                    <Text style={style.appTitle}>{appItem.displayName}</Text>
                </View>
                <TextInput placeholder="Nama Lengkap" style={style.input} />
                <TextInput placeholder="Email" style={style.input} />
                <TextInput secureTextEntry={true} placeholder="Password" style={style.input} />
                <TextInput secureTextEntry={true} placeholder="Konfirmasi Password" style={style.input} />

                <TouchableOpacity
                    style={{
                        minWidth: "100%",
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: appItem.colorTheme,
                        marginBottom: 20
                    }}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={{ color: 'white', padding: 15, fontSize: 20, fontWeight: "bold" }}>Daftar</Text>
                </TouchableOpacity>
                <Text style={{ textAlign: "center" }}>Apakah sudah memiliki akun? <Text style={{ color: "blue" }} onPress={() => navigation.navigate("Register")}>Klik disini</Text> untuk masuk ke akun anda</Text>

            </View>
        </View>
    )
}

export default Register