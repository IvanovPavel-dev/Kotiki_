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
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#b06a6a", height: 60 },
          headerTitleStyle: { color: "#ffadad" },
        }}
      />
      <Stack.Screen
        name="Description"
        component={Description}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#b06a6a", height: 60 },
          headerTitleStyle: { color: "#ffadad" },
        }}
      />
    </Stack.Navigator>
  );
}
