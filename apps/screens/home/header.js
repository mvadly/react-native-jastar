import React from "react";
import { View, TextInput, Button, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import appItem from "../../../app.json"
import Gap from "../../components/atom/gap"



const Header = () => {

    const styles = StyleSheet.create({
        iconSection: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
        },
        icon: { 
            width: 20, 
            height: 20, 
            margin: 10,
        },
        input: {
            flex: 1,
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            backgroundColor: '#fff',
            color: '#424242',
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
        },
    })

    return <View style={{
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: appItem.colorTheme,
        flexDirection: "row",
    }}>
       <View style={styles.iconSection}>
            <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" }} style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Cari Layanan..."
                underlineColorAndroid="transparent"
            />
        </View>
        <Gap width={15} />
        <View style={{ width: 50, justifyContent: "center", borderRadius: 50 }}>
            <Image source={{ uri: "https://pbs.twimg.com/profile_images/560460418070507520/7bOgE8jT_400x400.jpeg" }} style={{ width: 50, height: 50, borderRadius: 50 }} />
        </View>
    </View>
}
export default Header

