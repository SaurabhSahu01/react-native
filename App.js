import React from 'react';
import Chats from "./components/Chats";
import StatusBar from './components/StatusBar';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import namelist from './RandomNames';
const App = () => {
  
  return (
    <View>
    <StatusBar/>
    <ScrollView style={{height: '85%'}}>
      { 
        namelist.map((element, index) => <Chats name={element.name} message={element.message} image={element.image} key={index}/>)
      }
    </ScrollView>
    </View>
  );
};

export default App;