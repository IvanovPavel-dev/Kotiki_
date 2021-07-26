import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button, SafeAreaView} from 'react-native';


const apiKey = 'ea505b5c-e873-4b18-86ca-d855815a2cbc'
const url = 'https://api.thecatapi.com/v1/images/search'

export default function App() {

  const getRandomCat = () =>{ 
   // console.log('catURL')
fetch(url)
    .then((res)=>res.json())
    .then((cats)=>{console.log('cats',cats)})
    .catch((error)=>{console.log('Error',error)})
  }

  return (
    <SafeAreaView style={styles.container}>

      <Button title={'дайте-ка котика!'} onPress={getRandomCat} />
      <Text>Здесь будут  КОТИКИ!!!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a4d8fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
