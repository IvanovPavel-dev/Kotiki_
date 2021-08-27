import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Text,
} from "react-native";
import { getBreeds } from "./components/api";
import { gStyle } from "./styles/style";

function Breeds({ navigation }) {
  const [breeds, isLoading] = getBreeds();
  //console.log(breeds);
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
      <FlatList
        data={breeds}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={gStyle.list}
            onPress={() => navigation.navigate("Description", item)}
          >
            <View style={{ flexDirection: "row" }}>
              <Image style={gStyle.logo} source={{ uri: item.image.url }} />
              <Text style={gStyle.title}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default Breeds;
