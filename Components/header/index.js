import React from "react";
import { View, TextInput, Button, Image } from "react-native";
import Gap from "../atom/gap";

const Header = () => {
    return <View style={{
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: "green",
        flexDirection: "row",
    }}>
        <TextInput style={{ borderRadius: 50, paddingHorizontal: 20, backgroundColor: "white", flex: 1 }} />
        <Gap width={15} />
        <View style={{ width: 50, justifyContent:"center", borderRadius:50 }}>
            <Image source={{uri:"https://pbs.twimg.com/profile_images/560460418070507520/7bOgE8jT_400x400.jpeg"}} style={{width:50, height:50, borderRadius:50}} />
        </View>
    </View>
}
export default Header

