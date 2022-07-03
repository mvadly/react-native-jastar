import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, TextInput, Image } from 'react-native';
import Home from './Components/activity/home';
import Gap from './Components/atom/gap';
import Header from './Components/header';


const App = () => {
  return (
    <>
      <Header />
      <SafeAreaView>
        <ScrollView style={{ padding: 20 }} >
          <Home/>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}



export default App;