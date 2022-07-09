import React from 'react';
import { View, Text, Image, TouchableHighlight } from "react-native";

const clickApps = () => {
    return alert("its OK")
}

const Apps = () => {
    const AppOne = () =>
        <View style={{ marginTop: 10, flexDirection: "row", justifyContent: 'space-between' }} >

                <TouchableHighlight onPress={clickApps} underlayColor="white">
                    <View style={{}}>
                        <Image source={{ uri: "https://s2.bukalapak.com/img/29522375692/large/data.png" }} style={{ borderRadius: 10, width: 50, height: 50 }} />
                        <Text style={{ textAlign: "center", marginTop: 5 }}>Go Ride</Text>
                    </View>
                </TouchableHighlight>

        </View>

    const AppTwo = () =>
        <View style={{ marginTop: 10, flexDirection: "row", justifyContent: 'space-between' }}>
            <TouchableHighlight onPress={clickApps}>
                <View style={{}}>
                    <Image source={{ uri: "https://s2.bukalapak.com/img/29522375692/large/data.png" }} style={{ borderRadius: 10, width: 50, height: 50 }} />
                    <Text style={{ textAlign: "center", marginTop: 5 }}>Go Food</Text>
                </View>
            </TouchableHighlight>

        </View>

    return (
        <>
            <AppOne />
            <AppTwo />
        </>
    )
}

export default Apps