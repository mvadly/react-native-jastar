import React from 'react';
import { Text, View, Image } from 'react-native';
import Apps from './apps';
import Gopay from './gopay';
import Header from './header';
const Home = () => {
    return (
        <View>
            <Header />
            <View style={{ padding: 20 }} >
                <Gopay />
                <Apps />
            </View>
        </View>
    )
}

export default Home