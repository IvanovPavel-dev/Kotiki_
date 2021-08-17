import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "./Favorites";
import Navigate from "../navigate";
import Temp from "./temp";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: 15,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 50,
        },
      }}
    >
      <Tab.Screen
        name="Navigate"
        component={Navigate}
        screenOptions={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        screenOptions={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;
