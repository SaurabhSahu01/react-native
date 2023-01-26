import React from 'react'
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
function StatusBar() {
  return (
    <View style={{backgroundColor: '#f2e699', height: '15%', display:'flex',flexDirection:'column',justifyContent: 'space-around',}}>
        <View style={{display:'flex',flexDirection: 'row', marginTop: 15,}}>
            <Icon name="bars" size={25} color="black" style={{marginHorizontal: 15}}></Icon>
            <Text style={{fontSize:20, fontWeight: 'bold', fontFamily:'monospace', marginHorizontal: 10,}}>ChatApp</Text>
        </View>
        <View style={{display:'flex',flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 'auto', }}>
            <Text style={{fontSize: 20, fontWeight: 'normal',}}>Talks</Text>
            <Text style={{fontSize: 20, fontWeight: 'normal'}}>Favourites</Text>
        </View>
    </View>
  )
}

export default StatusBar