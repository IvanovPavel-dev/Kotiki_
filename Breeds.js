import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View ,Button, Image, TouchableOpacity } from 'react-native';



export default function Breeds ({navigation}) {
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
    
}
