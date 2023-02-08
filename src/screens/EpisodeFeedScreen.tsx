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
import { fetchData, useEpisode } from "../hooks/useEpisode";
import { Card } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Item = ({ name }: any) => {
  const Tab = createBottomTabNavigator();
  return (
    <TouchableOpacity style={styles.touchable}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const NavBar = () => {
  return (
    <View style={styles.navContainer}>
      <Text style={styles.navItem}>Personnage</Text>
      <Text style={styles.navItem}>Épisode</Text>
      <Text style={styles.navItem}>Emplacement</Text>
    </View>
  );
};

export const EpisodeFeedScreen = () => {
  const renderItem = ({ item }: any) => <Item name={item.name} />;
  const { isInitialLoading, isError, data } = useEpisode();

  if (isInitialLoading) {
    return <Text> Loading ...</Text>;
  }

  if (isError) {
    return <Text> Erreur</Text>;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <NavBar />
    </SafeAreaView>
  );
};

export default EpisodeFeedScreen;

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
    height: 20,
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
