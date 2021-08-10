import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";

const Temp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Temp screen</Text>
    </View>
  );
};

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
});
export default Temp;
