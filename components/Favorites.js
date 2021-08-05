import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

// const apiKey = 'ea505b5c-e873-4b18-86ca-d855815a2cbc'
const url = "https://api.thecatapi.com/v1/favourites";
const settings = {
  async: true,
  crossDomain: true,
  method: "GET",
  headers: {
    "x-api-key": "ea505b5c-e873-4b18-86ca-d855815a2cbc",
  },
};

function toArrObj(arr) {
  let arrObj = [];
  for (let i = 0; i < arr.length; i++) {
    let tempObj = {
      key: i.toString(),
      url: arr[i],
    };
    arrObj.push(tempObj);
  }
  return arrObj;
}

export default function Favorites() {
  const [favoriteCatsUrls, setFavoriteCatsUrls] = useState([]);

  const getFavoriteCats = () => {
    fetch(url, settings)
      .then((res) => res.json())
      .then((cats) => {
        const catUrls = cats.map((item) => item.image.url);
        const catsObjs = toArrObj(catUrls);
        //console.log(catsObjs)
        setFavoriteCatsUrls(catsObjs);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  console.log(favoriteCatsUrls);

  return (
    <View style={styles.container}>
      <Button title={"пакажи любимчиков"} onPress={getFavoriteCats} />
      <FlatList
        data={favoriteCatsUrls}
        renderItem={({ item }) => (
          <Image style={styles.logo} source={{ uri: item.url }} />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    backgroundColor: "#a4d8fc",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 250,
    height: 250,
    borderRadius: 50,
  },
  borat: {
    width: 250,
    height: 40,
    borderRadius: 15,
  },
});

// <Image
//         style={styles.logo}
//         source={{
//           uri: 'https://image.freepik.com/free-vector/declaration-disappearance-beloved-cat-runaway-animal-is-danger-flat-illustration_124715-416.jpg',
//         }}
//       />
