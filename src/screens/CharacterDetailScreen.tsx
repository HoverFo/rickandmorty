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
  import { fetchData, useCharacter } from "../hooks/useCharacter";
  import { Card } from "react-native-paper";
  import { NavigationContainer, useRoute } from "@react-navigation/native";
  import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
  import { useNavigation } from "@react-navigation/native";
  import { Routes } from "../navigation/Routes";

export const CharacterDetailScreen = ({ route }) => {
    const nomcharactere = route.params.name;
    const imagecharactere = route.params.image;
    const statuscharactere = route.params.status;
    const speciescharactere = route.params.species;
    return (
        <TouchableOpacity style={styles.touchable} >
          <View style={styles.container}>
            <Image style={styles.image} source={{ uri: imagecharactere }} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>{nomcharactere}</Text>
              <Text style={styles.text}>{statuscharactere}</Text>
              <Text style={styles.text}>{speciescharactere}</Text>
            </View>
          </View>
        </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    touchable: {
      padding: 10,
    },
    container: {
      width: "100%",
      height: 400,
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
  