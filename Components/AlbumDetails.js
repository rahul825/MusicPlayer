import React from 'react';
import { StyleSheet,View, Text, } from 'react-native';


export default function AlbumDetails({artistName,songName}){
    return(
        <View style={styles.container}>
        <Text style= {styles.text}>Artist |{artistName}</Text>
        <Text style= {styles.text}>Song | {songName}</Text>
        </View>

    );
}

const styles= StyleSheet.create({
 container: {
     alignItems: 'center',
     justifyContent: 'center',
 },
 text: {
     fontSize: 20,
     fontStyle: 'italic',
     color: '#fff',
 }
});