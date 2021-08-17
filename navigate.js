import React from "react";
import Description from "./components/Description";
import Breeds from "./Breeds";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Navigate({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Breeds"
        component={Breeds}
        screenOptions={{ headerShown: false }}
      />
      <Stack.Screen
        name="Description"
        component={Description}
        screenOptions={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
