import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { CharacterFeedScreen } from "../screens/CharacterFeedScreen";
import { EpisodeFeedScreen } from "../screens/EpisodeFeedScreen";


import { Routes } from "./Routes";
import LocationFeedScreen from "../screens/LocationFeedScreen";
import { CharacterDetailScreen } from "../screens/CharacterDetailScreen";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.CHARACTER_SCREEN}
          component={CharacterFeedScreen}
        />
        <Stack.Screen
          name={Routes.EPISODE_SCREEN}
          component={EpisodeFeedScreen}
        />
        <Stack.Screen
          name={Routes.LOCATION_SCREEN}
          component={LocationFeedScreen}
        />
        <Stack.Screen
          name={Routes.CHARACTERDETAIL_SCREEN}
          component={CharacterDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
