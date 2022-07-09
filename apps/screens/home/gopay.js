import React from 'react';
import { View, Text, Image} from "react-native";
import appItem from "../../../app.json"

const Gopay = () => {
    return <View style={{ padding: 15, backgroundColor: "lightblue", flexDirection: "row", justifyContent: 'space-between', alignItems: "center", borderRadius: 20 }}>
    <View style={{ width: 130, margin: 10 }}>
        <View style={{ backgroundColor: "white", borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5 }}>
            <Text style={{ color: "black" }}>gopay</Text>
            <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>Rp22.976</Text>
            <Text style={{ color: appItem.colorTheme }}>Klik & cek riwayat</Text>
        </View>
    </View>
    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignContent: "center" }}>
        <View style={{ flex: 1, padding: 5 }}>
            <Image
                source={{ uri: "https://cdn.iconscout.com/icon/free/png-256/cash-payment-1443455-1220293.png" }}
                style={{ width: 30, height: 30 }}
            />
            <Text style={{ fontSize: 12 }}>Bayar</Text>
        </View>
        <View style={{ flex: 1, padding: 5 }}>
            <Image
                source={{ uri: "https://cdn.iconscout.com/icon/free/png-256/cash-payment-1443455-1220293.png" }}
                style={{ width: 30, height: 30 }}
            />
            <Text style={{ fontSize: 12 }}>Isi Saldo</Text>
        </View>
        <View style={{ flex: 1, padding: 5 }}>
            <Image
                source={{ uri: "https://cdn.iconscout.com/icon/free/png-256/cash-payment-1443455-1220293.png" }}
                style={{ width: 30, height: 30 }}
            />
            <Text style={{ fontSize: 12 }}>Eksplor</Text>
        </View>
    </View>
</View>
}

export default Gopay