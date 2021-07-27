import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View ,Button, SafeAreaView, Image} from 'react-native';



const apiKey = 'ea505b5c-e873-4b18-86ca-d855815a2cbc'
const url = 'https://api.thecatapi.com/v1/images/search'

export default function App() {

const [catUrl,setCatUrl]= useState('')


  const getRandomCat = () =>{ 
  
fetch(url)
    .then((res)=>res.json())
    .then((cats)=>{
      console.log('cats',cats)
      const catUrl = cats[0].url
      setCatUrl(catUrl)
    })
    .catch((error)=>{console.log('Error',error)})
  }
console.log(catUrl)
  return (
    <SafeAreaView style={styles.container}>
      
      <Button title={'дайте-ка котика!'} onPress={getRandomCat} />
      <Text>Здесь будут  КОТИКИ!!!</Text>
      
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// <Image source={{
//         width : 300,
//         uri : 'https://pikabu.ru/story/kotov_ne_vyibirayut_8244093'}} />


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a4d8fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
