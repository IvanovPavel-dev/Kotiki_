import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default function Main({ navigation }) {
  const toFavorites = () => {
    navigation.navigate("Favorites");
  };
  const toBreeds = () => {
    navigation.navigate("Breeds");
  };

  return (
    <View style={styles.container}>
      <Button title={"к любимчикам"} onPress={toFavorites} />
      <Button title={"к породам"} onPress={toBreeds} />
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
