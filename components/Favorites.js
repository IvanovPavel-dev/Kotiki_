import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, FlatList } from "react-native";
import { getFavorites } from "./api";
import { gStyle } from "../styles/style";

function Favorites() {
  const [favoriteCatsUrls, isLoading] = getFavorites();

  return (
    <View style={gStyle.main}>
      {isLoading && (
        <Image
          style={gStyle.picture}
          source={{
            uri: "https://cryptopet.net/static/media/lg.blue-longcat-spinner.dbcca15c.gif",
          }}
        />
      )}
      {favoriteCatsUrls && (
        <FlatList
          data={favoriteCatsUrls}
          renderItem={({ item }) => (
            <Image style={gStyle.picture} source={{ uri: item.url }} />
          )}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

export default Favorites;
