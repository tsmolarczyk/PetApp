import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GradientWrapper from "../components/GradientWrapper";

const DogDetailsView = ({ route }) => {
  const { dog } = route.params;

  const navigation = useNavigation();

  const handleChat = dog => {
    navigation.navigate("Chat", { dog });
  };

  return (
    <GradientWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>{dog.name}</Text>
        <Text>Breed: {dog.breed}</Text>
        <Button title="chat with owner" onPress={handleChat} />
      </View>
    </GradientWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  }
});

export default DogDetailsView;
