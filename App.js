import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, TextInput, Image } from 'react-native';
import Navigator from './apps/navigator';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Navigator />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}



export default App;