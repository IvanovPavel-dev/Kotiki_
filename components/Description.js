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

export default function Description({ route }) {
  const [displayCatUrl, setCatUrl] = useState(route.params.image.url);
  const url = `https://api.thecatapi.com/v1/images/search?breed_id=${route.params.breedId}`;
  const settings = {
    async: true,
    crossDomain: true,
    method: "GET",
    headers: {
      "x-api-key": "ea505b5c-e873-4b18-86ca-d855815a2cbc",
    },
  };
  const nextCat = () => {
    fetch(url, settings)
      .then((res) => res.json())
      .then((cats) => {
        console.log(cats[0]);
        setCatUrl(cats[0].url);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  console.log(displayCatUrl);
  return (
    <View style={styles.container}>
      <Text>{route.params.name}</Text>
      <Image
        style={styles.logo}
        source={{
          uri: displayCatUrl,
        }}
      />
      <Button title={"next"} onPress={nextCat} />
      <Text>{route.params.description}</Text>
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
