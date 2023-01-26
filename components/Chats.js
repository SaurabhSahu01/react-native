import React from 'react'
import { View, Text, Image } from 'react-native'
function Chats(props) {
  return (
    <View style={{display: 'flex', justCont: 'center', alignContent: 'center'}}>
        <Image 
            source={{
                uri: props.image
            }}
            style ={{width: 100, height: 100}}
        />
        <Text
            style={{fontSize: 15,fontWeight: 'bold',}}
        >{props.name}</Text>
    </View>
  )
}

export default Chats