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
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Routes } from "../navigation/Routes";
import Icon from "react-native-vector-icons/FontAwesome";
import YouTube from "react-native-youtube";
import { Linking } from "react-native";

const Item = ({ name, episode }: any) => {
  const Tab = createBottomTabNavigator();
  return (
    <TouchableOpacity
      style={styles.touchable}
      onPress={() => {
        if (episode === "S01E01") {
          Linking.openURL("https://www.youtube.com/watch?v=NE4P6f2LunQ");
        } else if (episode === "S01E02") {
          Linking.openURL("https://www.youtube.com/watch?v=lp1D0X3yRIg");
        } else if (episode === "S01E03") {
          Linking.openURL("https://www.youtube.com/watch?v=qGZzetjfwDY");
        } else if (episode === "S01E04") {
          Linking.openURL("https://www.youtube.com/watch?v=FWcmUiImH8o");
        } else if (episode === "S01E05") {
          Linking.openURL("https://www.youtube.com/watch?v=FWcmUiImH8o");
        } else if (episode === "S01E06") {
          Linking.openURL("https://www.youtube.com/watch?v=3GSmlzfdMLI");
        } else if (episode === "S01E07") {
          Linking.openURL("https://www.youtube.com/watch?v=kkfrXH45JNY");
        } else if (episode === "S01E08") {
          Linking.openURL("https://www.youtube.com/watch?v=qcarWUzldqU");
        } else if (episode === "S01E09") {
          Linking.openURL("https://www.youtube.com/watch?v=Yg7AW8kh180");
        } else if (episode === "S01E10") {
          Linking.openURL("https://www.youtube.com/watch?v=qkc66SGjpi8");
        } else if (episode === "S01E11") {
          Linking.openURL("https://www.youtube.com/watch?v=lYtQTF3wlLQ");
        } else if (episode === "S02E01") {
          Linking.openURL("https://www.youtube.com/watch?v=sJU56mGoq3w");
        } else if (episode === "S02E02") {
          Linking.openURL("https://www.youtube.com/watch?v=OqP9o1xBV00");
        } else if (episode === "S02E03") {
          Linking.openURL("https://www.youtube.com/watch?v=WBD7VzLVVJ4");
        } else if (episode === "S02E04") {
          Linking.openURL("https://www.youtube.com/watch?v=RqmXJQ8-wj0");
        } else if (episode === "S02E05") {
          Linking.openURL("https://www.youtube.com/watch?v=NaUyNjHXU6Q");
        } else if (episode === "S02E06") {
          Linking.openURL("https://www.youtube.com/watch?v=l43fE4ZCXm8");
        } else if (episode === "S02E07") {
          Linking.openURL("https://www.youtube.com/watch?v=zSTcpTg68fU");
        } else if (episode === "S02E08") {
          Linking.openURL("https://www.youtube.com/watch?v=DlPN8MIZbCs");
        } else if (episode === "S02E09") {
          Linking.openURL("https://www.youtube.com/watch?v=DHIiZaMjPdY");
        }
      }}
    >
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{episode}</Text>
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

export const EpisodeFeedScreen = () => {
  const renderItem = ({ item }: any) => (
    <Item name={item.name} episode={item.episode} />
  );
  const { isInitialLoading, isError, data } = useEpisode();

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

export default EpisodeFeedScreen;

const styles = StyleSheet.create({
  touchable: {
    padding: 10,
  },
  container: {
    width: "100%",
    height: 100,
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
