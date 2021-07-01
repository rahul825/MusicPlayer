import React from 'react';
import { View, Image, Dimensions } from 'react-native';

const {width} = Dimensions.get('window').width;

export default function AlbumPoster({image}){
    return(
        <View style={{margin: 20}}>
        <Image  resizeMode="contain" source={{uri: image}} style={{width: width, height: 300, borderRadius: 25}}  />
        </View>

    );
}

