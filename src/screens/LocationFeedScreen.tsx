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
  import { NavigationContainer } from '@react-navigation/native';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  
  const dataArray = datajson.results.map((item) => ({
    name: item.name,
    image: item.image,
  }));
  
  type ItemProps = {
    name: string;
    image: string;
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
    
  const Tab = createBottomTabNavigator();
  const Item = ({ name, image }: ItemProps) => {
    return (
      <TouchableOpacity style={styles.touchable}>
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: image }} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{name}</Text>
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
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#ddd',
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
  
  export const EpisodeFeedScreen = () => {
    const { isInitialLoading, isError, data } = useCharacter();
  
    if (isInitialLoading) {
      return <Text> Loading ...</Text>;
    }
  
    if (isError) {
      return <Text> Erreur</Text>;
    }
  
    if (datajson.results === undefined) {
      return <Text>Nous n'avons pas trouver la liste</Text>;
    }
  
    return (
      <SafeAreaView>
        <FlatList
          data={dataArray}
          renderItem={({ item }) => <Item name={item.name} image={item.image} />}
        />
        <NavBar />
      </SafeAreaView>
      
    );
  };
  
  export default EpisodeFeedScreen;