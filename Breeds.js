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

function Breeds({ navigation }) {
  const [breeds, isLoading] = getBreeds();
  console.log(breeds);
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
    width: 250,
    height: 250,
  },
});
{
}

export default Breeds;
