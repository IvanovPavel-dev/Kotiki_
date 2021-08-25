import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, FlatList } from "react-native";
import { getFavorites } from "./api";

function Favorites() {
  const [favoriteCatsUrls, isLoading] = getFavorites();

  return (
    <View style={styles.container}>
      {isLoading && (
        <Image
          style={styles.logo}
          source={{
            uri: "https://cryptopet.net/static/media/lg.blue-longcat-spinner.dbcca15c.gif",
          }}
        />
      )}
      {favoriteCatsUrls && (
        <FlatList
          data={favoriteCatsUrls}
          renderItem={({ item }) => (
            <Image style={styles.logo} source={{ uri: item.url }} />
          )}
        />
      )}
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
    width: 250,
    height: 250,
    borderRadius: 50,
  },
});

export default Favorites;
