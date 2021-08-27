import React, { useState } from "react";
import { StyleSheet, View, Button, Image, Text } from "react-native";
import { nextCatA, likeCatPost } from "./api";
import { gStyle } from "../styles/style";

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
    <View style={gStyle.main}>
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Image
        style={gStyle.picture}
        source={{
          uri: displayCatUrl,
        }}
      />
      <View style={{ flexDirection: "row" }}>
        <Button title={"next"} onPress={nextCat} />
        <Button title={"like"} onPress={likeCatO} />
      </View>
      <Text style={gStyle.text}>{route.params.description}</Text>
    </View>
  );
}
