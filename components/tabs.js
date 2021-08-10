import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Button,
  Image,
  TouchableOpacity,
  FlatList,
  Text,
} from "react-native";

import Temp from "./temp";
import Favorites from "./Favorites";
import Breeds from "../Breeds";
import Main from "./Main";
import Navigate from "../navigate";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 50,
        },
      }}
    >
      <Tab.Screen name="Breeds" component={Navigate} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}
