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
  const [catId, setCatId] = useState(route.params.image.id);

  const data = {
    image_id: catId,
    sub_id: "ap-39",
  };
  const url = `https://api.thecatapi.com/v1/images/search?breed_id=${route.params.breedId}`;
  const settingsNext = {
    async: true,
    crossDomain: true,
    method: "GET",
    headers: {
      "x-api-key": "ea505b5c-e873-4b18-86ca-d855815a2cbc",
    },
  };
  const nextCat = () => {
    fetch(url, settingsNext)
      .then((res) => res.json())
      .then((cats) => {
        setCatUrl(cats[0].url);
        setCatId(cats[0].id);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const settingsLike = {
    async: true,
    crossDomain: true,
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": "ea505b5c-e873-4b18-86ca-d855815a2cbc",
    },
    processData: false,
    body: JSON.stringify(data),
  };

  const likeCat = () => {
    fetch("https://api.thecatapi.com/v1/favourites", settingsLike)
      .then((res) => res.json())
      .then((item) => {
        console.log(item);
      })

      .catch((error) => {
        console.log("Error", error);
      });
  };

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
      <Button title={"like"} onPress={likeCat} />
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
