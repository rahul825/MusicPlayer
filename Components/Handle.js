import React from 'react';
import { StyleSheet,View ,TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Handle({pause,onPlay,onPause, onNext, onBack}){
    return(
        <View style={styles.container}>
        <TouchableOpacity  style={styles.button} onPress={onBack}>
        <AntDesign  name="leftcircle" size={35} color="#fff" />
        </TouchableOpacity>
        {pause ?(
            <TouchableOpacity  style={styles.btn} onPress={onPlay}>
        <AntDesign  name="playcircleo" size={35} color="#fff" />
        </TouchableOpacity>
        ) :(
            <TouchableOpacity  style={styles.btn} onPress={onPause}>
        <AntDesign  name="pausecircleo" size={35} color="#fff" />
        </TouchableOpacity>
        )}

        <TouchableOpacity  style={styles.button} onPress={onNext}>
        <AntDesign name="rightcircle" size={35} color="#fff" />
        </TouchableOpacity>
        </View>

    );
}

const styles= StyleSheet.create({
 container: {
     flexDirection: 'row',
     marginTop: 20,
     alignItems: 'center',
     justifyContent: 'center',
 },
 btn: {
  
    marginHorizontal: 30,
    borderColor: '#1B1246',
    borderWidth: 16,
    width: 126,
    height: 128,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    shadowColor: '#1B1246',
    shadowOpacity: 0.5,
    elevation: 0.2,
    shadowRadius: 30,

 },
});