import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  Image,
  TouchableOpacity,
  FlatList,
  Text,
} from "react-native";

function toArrObj(arr) {
  let arrObj = [];
  for (let i = 0; i < arr.length; i++) {
    let tempObj = {
      key: i.toString(),
      name: arr[i].name,
      description: arr[i].description,
      image: arr[i].image,
      breedId: arr[i].id,
    };
    arrObj.push(tempObj);
  }
  return arrObj;
}

export default function Breeds({ navigation }) {
  const [breeds, setBreeds] = useState([]);
  const getBreeds = () => {
    const settingsBreed = {
      async: true,
      crossDomain: true,
      method: "GET",
      headers: {
        "x-api-key": "ea505b5c-e873-4b18-86ca-d855815a2cbc",
      },
    };

    fetch("https://api.thecatapi.com/v1/breeds?attach_breed=0", settingsBreed)
      .then((res) => res.json())
      .then((item) => {
        // console.log(item);
        const tempItem = toArrObj(item);
        //  console.log(tempItem);
        setBreeds(tempItem);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  console.log(breeds);

  return (
    <View style={styles.container}>
      <Button title={"Породы"} onPress={getBreeds} />
      <FlatList
        data={breeds}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Description", item)}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
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
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  borat: {
    width: 250,
    height: 40,
    borderRadius: 15,
  },
});
{
}
