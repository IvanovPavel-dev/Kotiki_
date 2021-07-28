import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View ,Button, SafeAreaView, Image } from 'react-native';

const apiKey = 'ea505b5c-e873-4b18-86ca-d855815a2cbc'
const url = 'https://api.thecatapi.com/v1/images/search'

export default function App() {

const [catUrl,setCatUrl]= useState('https://cs.pikabu.ru/images/big_size_comm/2012-11_4/13533113323571.jpg')

  const getRandomCat = () =>{ 
  
fetch(url)
    .then((res)=>res.json())
    .then((cats)=>{
      
      const catUrl = cats[0].url
      setCatUrl(catUrl)
    })
    .catch((error)=>{console.log('Error',error)})
  }
console.log(catUrl)
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: catUrl,
        }}
      />
      <Button title={'дайте-ка котика!'} onPress={getRandomCat} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: '#a4d8fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 250,
  },
});
