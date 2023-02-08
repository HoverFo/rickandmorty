import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import { default as datajson } from "../../api/data.json";
import { fetchData, useLocation } from "../hooks/useLocation";
import { Card } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../navigation/Routes";
import Icon from "react-native-vector-icons/FontAwesome";

const Item = ({ name, type, dimension }: any) => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      style={styles.touchable}
      onPress={() => {
        /* 1. Navigate to the Details route with params */
        navigation.navigate(Routes.CHARACTERDETAIL_SCREEN, {
          name,
          type,
          dimension,
        });
      }}
    >
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{type}</Text>
          <Text style={styles.text}>{dimension}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const NavBar = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation<any>();
  const navigateToEpisode = () => {
    navigation.navigate(Routes.EPISODE_SCREEN);
  };
  const navigateToCharacter = () => {
    navigation.navigate(Routes.CHARACTER_SCREEN);
  };
  const navigateToLocation = () => {
    navigation.navigate(Routes.LOCATION_SCREEN);
  };

  return (
    <View style={styles.navContainer}>
      <Icon name="user" size={30} onPress={navigateToCharacter} />
      <Icon name="book" size={30} onPress={navigateToEpisode} />
      <Icon name="globe" size={30} onPress={navigateToLocation} />
    </View>
  );
};

export const CharacterFeedScreen = () => {
  const renderItem = ({ item }: any) => (
    <Item name={item.name} type={item.type} dimension={item.dimension} />
  );
  const { isInitialLoading, isError, data } = useLocation();

  if (isInitialLoading) {
    return <Text> Loading ...</Text>;
  }

  if (isError) {
    return <Text> Erreur</Text>;
  }

  return (
    <SafeAreaView>
      <NavBar />
      <FlatList
        data={data.results}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default CharacterFeedScreen;

const styles = StyleSheet.create({
  touchable: {
    padding: 10,
  },
  container: {
    width: "100%",
    height: 300,
    marginBottom: 25,
    borderRadius: 15,
    borderWidth: 1,
    padding: 0,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },
  navContainer: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
  navItem: {
    fontSize: 16,
  },

  image: {
    width: "100%",
    height: "80%",
  },

  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
