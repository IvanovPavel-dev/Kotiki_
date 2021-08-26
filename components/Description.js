import React, { useState } from "react";
import { StyleSheet, View, Button, Image, Text } from "react-native";
import { nextCatA, likeCatPost } from "./api";

export default function Description({ route }) {
  const [displayCatUrl, setCatUrl] = useState(route.params.image.url);
  const [catId, setCatId] = useState(route.params.image.id);

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
      <View style={{ flexDirection: "row" }}>
        <Button title={"next"} onPress={nextCat} />
        <Button title={"like"} onPress={likeCatO} />
      </View>
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
