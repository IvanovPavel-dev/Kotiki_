import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View ,Button, Image, TouchableOpacity } from 'react-native';


//const apiKey = 'ea505b5c-e873-4b18-86ca-d855815a2cbc'
const url = 'https://api.thecatapi.com/v1/images/search'
// "sub_id": "ap-39"
export default function Main({navigation}) {

  const loadPage = () =>{
navigation.navigate('Favorites')
}

const [catUrl,setCatUrl]= useState('https://cs.pikabu.ru/images/big_size_comm/2012-11_4/13533113323571.jpg')
const [catId,setCatId]= useState('')

const data = {
  "image_id": catId,
  "sub_id": "ap-39"
}
  const getRandomCat = () =>{ 
  
fetch(url)
    .then((res)=>res.json())
    .then((cats)=>{
      console.log(cats)
      const catUrl = cats[0].url
      setCatUrl(catUrl)
      const catId = cats[0].id
      setCatId(catId)

    })
    .catch((error)=>{console.log('Error',error)})
  }
console.log(catUrl)
console.log(catId)
const settings = {
  "async": true,
  "crossDomain": true,
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "x-api-key": "ea505b5c-e873-4b18-86ca-d855815a2cbc"
  },
  "processData": false,
  body: JSON.stringify(data)
}
const likeCat = () =>{
  fetch("https://api.thecatapi.com/v1/favourites",settings)
  .then((res)=>res.json())
  .then((item)=>{
    console.log(item)
    
    })

  .catch((error)=>{console.log('Error',error)})
}

  return (
    <View style={styles.container}>
      <Button title={'к любимчикам'} onPress={loadPage} />
      <Image
        style={styles.logo}
        source={{
          uri: catUrl,
        }}
      />
      <TouchableOpacity onPress={likeCat}>
        <Image
        style={styles.borat}
        source={require('../assets/borat_nra_15845941_orig_.jpeg')}
        />
      </TouchableOpacity>
      <Button title={'дайте-ка ещё котика!'} onPress={getRandomCat} />
      
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
    borderRadius: 50
  },
  borat : {
    width: 250,
    height: 40,
    borderRadius: 15
  }
});
