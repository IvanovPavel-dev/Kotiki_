import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Text,
} from "react-native";
import { instance } from "./components/api";

const missingBreedUrl =
  "https://media.istockphoto.com/vectors/the-declaration-of-the-disappearance-of-a-beloved-cat-the-runaway-is-vector-id1210366497?k=6&m=1210366497&s=612x612&w=0&h=nhnf9Cvn4WUOP19LMOZ-BCTRhhOy1KH54jKXVClR8f4=";

function filterObj(arr) {
  const obj = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].image === undefined) {
      arr[i].image = missingBreedUrl;
      obj.push(arr[i]);
    } else {
      const tempItem = arr[i].image.url;
      arr[i].image = tempItem;
      obj.push(arr[i]);
    }
  }
  return obj;
}

function Breeds({ navigation }) {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getBreeds() {
      const request = await instance.get(`breeds?attach_breed=0`);
      console.log(request);
      const tempItem = request.data.map((item) => {
        const a = {
          image: item.image,
          key: item.name,
          description: item.description,
          name: item.name,
          breedId: item.id,
        };
        return a;
      });
      //const tempItem = toArrObjDescription(request.data);
      console.log(tempItem);
      filterObj(tempItem);
      console.log(tempItem);
      setBreeds(tempItem);
      setIsLoading(false);
    }
    getBreeds();
  }, []);

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
