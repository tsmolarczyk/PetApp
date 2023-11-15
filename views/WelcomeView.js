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
    { id: "1", name: "Fido", breed: "Labrador" },
    { id: "2", name: "Spot", breed: "Dalmatian" },
    { id: "3", name: "Rex", breed: "German Shepherd" },
    { id: "4", name: "Buddy", breed: "Golden Retriever" }
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
  listItem: {
    padding: 20,
    width: "80%", 
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
});

export default WelcomeView;
