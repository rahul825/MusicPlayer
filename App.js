import React , { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Video } from 'expo-av';;
import AlbumPoster from './Components/AlbumPoster';
import AlbumDetails from './Components/AlbumDetails';
import Handle from './Components/Handle';
import {TRACKS} from './Components/musics';



export default function App() {
  const [ pause, setPause ] = useState(false);
  const [ selectedTrack, setSelectedTrack ] = useState(0);
  const currentTrack = TRACKS[selectedTrack];

  function onPlay(){
    setPause(false);

  }

  function onPause(){
    setPause(true);
    
  }

  function onNext(){
    if(selectedTrack == TRACKS.lenght - 1){
      setSelectedTrack(0);
    }
    else{
      setSelectedTrack(selectedTrack + 1);
    }
  }

  function onBack(){
    if(selectedTrack == 0){
      setSelectedTrack(TRACKS.length - 1);
    }
    else{
      setSelectedTrack(selectedTrack - 1);
    }
  }


  return (

      <View style={styles.container}>
        <StatusBar />
        <Text style={{  fontWeight: 'bold',color: '#fff',  marginLeft:100, marginTop: 10, alignItems:'center' , justifyContent:'center'}} >MUSIC PLAYER..</Text>
        <AlbumPoster  image={currentTrack.albumArtUrl} />
        <View style={{ flexDirection:'column', justifyContent: 'space-around', flex: 1, }}>
        
        <AlbumDetails artistName={currentTrack.artist}  songName={currentTrack.title} />
        <Handle  {...{pause, onPause, onPlay, onNext, onBack }} />
        </View>
        <Video
          source={{uri: currentTrack.audioUrl}}
          paused={pause}
          audioOnly
          poster={currentTrack.albumArtUrl} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111436',
  },
});
