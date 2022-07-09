import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Login from './screens/login';
import Register from './screens/login/register';
import Header from './screens/home/header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
    console.log(Navigator, Screen)
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Login">
                <Screen name="Login" component={Login}></Screen>
                <Screen name="Register" component={Register}></Screen>
                <Screen name="Home" component={Home} options={({ navigation, route }) => ({
                    header: () => <Header />
                })}></Screen>
            </Navigator>
            <View style={{ bottom: 0, left: 0 }}><Text style={{ textAlign: "center", padding: 20 }}>Bottom Navbar</Text></View>
        </NavigationContainer>
    );
}


export default AppNavigator