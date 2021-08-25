import React, { useState } from "react";
import { StyleSheet, View, Button, Image, Text } from "react-native";
import { nextCatA, likeCatPost } from "./api";

export default function Description({ route }) {
  const [displayCatUrl, setCatUrl] = useState(route.params.image.url);
  const [catId, setCatId] = useState(route.params.image.id);

  const data = {
    image_id: catId,
    sub_id: "ap-39",
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
    debugger;
  };
  async function nextCat() {
    const catObj = await nextCatA(
      `images/search?breed_id=${route.params.breedId}`
    );
    setCatUrl(catObj.url);
    setCatId(catObj.catId);
  }

  async function likeCatO() {
    const request = await likeCatPost(catId);
  }

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
      <Button title={"likeO"} onPress={likeCatO} />
      <Button title={"like"} onPress={likeCat} />
      <Text style={styles.text}>{route.params.description}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#facfa7",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
  },
  logo: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  text: {
    paddingTop: 20,
  },
});
{
}
