import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import GradientWrapper from "../components/GradientWrapper";

const DogDetailsView = ({ route }) => {
  const { dog } = route.params;
  const navigation = useNavigation();

  const handleChat = () => {
    navigation.navigate("Chat", { dog });
  };

  const handleMap = () => {
    navigation.navigate("Map", { dog });
  };

  return (
    <GradientWrapper>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.title}>{dog.name}</Text>
          <Text style={styles.detail}>Breed: {dog.breed}</Text>
          <Text style={styles.detail}>Lost Location: {dog.lostLocation}</Text>
          <Text style={styles.detail}>Owner: {dog.owner}</Text>
          <Text style={styles.detail}>Appearance: {dog.appearance}</Text>
          <Text style={styles.detail}>Likes: {dog.likes}</Text>
          <Image
            source={require("../assets/dog-pic.jpeg")}
            style={styles.image}
          />
          <TouchableOpacity style={styles.customButton} onPress={handleChat}>
            <Text style={styles.customButtonText}>Chat with owner</Text>
          </TouchableOpacity>
          <Button title="map" onPress={handleMap} />
        </View>
      </ScrollView>
    </GradientWrapper>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    width: "100%"
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 20,
    textAlign: "center",
    textTransform: "uppercase"
  },
  detail: {
    fontSize: 18,
    color: "#005b99",
    marginBottom: 10,
    width: "100%",
    textAlign: "left",
    borderBottomWidth: 1,
    borderBottomColor: "#b3d9ff",
    paddingBottom: 5
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 200,
    marginTop: 20,
    marginBottom: 30
  },
  customButton: {
    backgroundColor: "#0066cc",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { height: 2, width: 2 },
    elevation: 3
  },
  customButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default DogDetailsView;
