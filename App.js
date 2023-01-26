import React from 'react';
import Chats from "./components/Chats";
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Chats image="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800" name="Saurabh"/>
    </ScrollView>
  );
};

export default App;