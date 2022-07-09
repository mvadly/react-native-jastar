import React from 'react';
import { Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import Apps from './apps';
import Gopay from './gopay';
import Header from './header';



const Home = ({ navigation }) => {
    return (
        <>
            <ScrollView style={{ padding: 20 }}>
                <Gopay />
                <Apps nav={navigation} />
            </ScrollView>
        </>


    )
}

export default Home