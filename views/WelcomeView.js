import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import GradientWrapper from "../components/GradientWrapper";

const WelcomeView = () => {
  const dogs = [
    {
      id: "1",
      name: "Bella",
      breed: "Border Collie",
      lostLocation: "Near the grocery store on Forest Estate",
      owner: "Michael Wisniewski",
      appearance: "Long black fur with white markings, green collar",
      likes: "Smart, enjoys playing with frisbee"
    },
    {
      id: "2",
      name: "Max",
      breed: "Yorkshire Terrier",
      lostLocation: "Downtown, close to the central library",
      owner: "Sara Johnson",
      appearance: "Small size, silky grey and tan coat, red bow tie",
      likes: "Friendly, loves cuddles"
    },
    {
      id: "3",
      name: "Charlie",
      breed: "Beagle",
      lostLocation: "Maple Park, near the playground",
      owner: "Emily Clark",
      appearance: "Tri-color, short coat, blue collar with a bell",
      likes: "Enjoys sniffing trails, very vocal"
    },
    {
      id: "4",
      name: "Daisy",
      breed: "Labradoodle",
      lostLocation: "Lakeside walkway, close to the coffee shop",
      owner: "David Thompson",
      appearance: "Curly golden fur, pink collar, floppy ears",
      likes: "Sociable, loves swimming"
    },
    {
      id: "5",
      name: "Rocky",
      breed: "German Shepherd",
      lostLocation: "Greenwood Avenue, near the post office",
      owner: "Laura Gomez",
      appearance:
        "Large size, black and tan coat, distinctive scar on left ear",
      likes: "Loyal, excellent guard dog"
    }
  ];

  const navigation = useNavigation();

  const handlePressDog = dog => {
    navigation.navigate("DogDetails", { dog });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => handlePressDog(item)}
    >
      <Text style={styles.dogName}>{item.name}</Text>
      <Text style={styles.dogBreed}>{item.breed}</Text>
    </TouchableOpacity>
  );

  return (
    <GradientWrapper>
      <Text style={styles.title}>List of lost dogs</Text>
      <View style={styles.container}>
        <FlatList
          data={dogs}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </GradientWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    marginTop: 50,
    textAlign: "center",
    width: "100%",
    marginVertical: 10
  },

  listItem: {
    padding: 20,
    width: 300,
    alignSelf: "center",
    marginVertical: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  dogName: {
    fontSize: 18,
    textAlign: "center"
  },
  dogBreed: {
    fontSize: 14,
    color: "#666",
    textAlign: "center"
  }
});

export default WelcomeView;
