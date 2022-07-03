import React from 'react';
import { View, Text, Image } from "react-native";

const Apps = () => {
    return <View style={{flexDirection:"row"}}>
        <View style={{padding:10, width:20, height:20}}>
            <Image source={{uri:"https://s2.bukalapak.com/img/29522375692/large/data.png"}} style={{width:20, height:20}} />
            <Text>Go Ride</Text>
        </View>
    </View>
}

export default Apps