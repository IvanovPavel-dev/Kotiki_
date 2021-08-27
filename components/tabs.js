import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "./Favorites";
import Navigate from "../navigate";

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
          backgroundColor: "#b06a6a",
          borderRadius: 15,
          height: 50,
        },
      }}
    >
      <Tab.Screen
        name="Navigate"
        component={Navigate}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#b06a6a", height: 60 },
          headerTitleStyle: { color: "#ffadad" },
        }}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;
