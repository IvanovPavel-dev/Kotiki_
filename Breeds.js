import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Button,
  Image,
  TouchableOpacity,
  FlatList,
  Text,
} from "react-native";
import { getBreeds } from "./components/api";

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

function Breeds({ navigation }) {
  const [breeds, setBreeds] = useState([]);
  useEffect(() => {
    getBreeds();
    //setBreeds(tempItem);
  });
  //setBreeds(tempItem);
  //const [breeds, setBreeds] = useState([]);
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
    backgroundColor: "#facfa7",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 75,
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

export default Breeds;
