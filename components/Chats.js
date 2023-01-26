import React from 'react'
import { View, Text, Image } from 'react-native'
function Chats(props) {
    return (
        <View style={{backgroundColor: 'whitesmoke',}}>
        <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', borderBottomColor: 'black', borderBottomWidth: 0.5, marginStart:10, marginEnd:10, }}>
            <Image
                source={{
                    uri: props.image
                }}
                style={{width: 50, height: 50, borderRadius: 50, margin: 10,}}
            />
            <View style={{width: '90%'}}>
                <Text
                    style={{ fontSize: 17, fontWeight: 'bold', marginTop: 7, marginStart: 5, }}
                >{props.name}</Text>
                <Text style={{marginTop: 5, paddingHorizontal: 10, width: '90%',}} numberOfLines={1} ellipsizeMode='tail'>{props.message}</Text>
            </View>
        </View>
        </View>

    )
}

export default Chats