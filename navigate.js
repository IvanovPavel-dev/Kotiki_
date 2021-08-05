import React from "react";
import Main from "./components/Main";
import Favorites from "./components/Favorites";
import Description from "./components/Description";
import Breeds from "./Breeds";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          option={{ title: "Главная" }}
        />
        <Stack.Screen
          name="Favorites"
          component={Favorites}
          option={{ title: "Любимчики" }}
        />
        <Stack.Screen
          name="Breeds"
          component={Breeds}
          option={{ title: "Породы" }}
        />
        <Stack.Screen
          name="Description"
          component={Description}
          option={{ title: "О породе" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
