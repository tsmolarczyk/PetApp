import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginView from "./views/LoginView";
import WelcomeView from "./views/WelcomeView";
import DogDetailsView from "./views/DogDetailsView";
import ChatView from "./views/ChatView";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="Welcome" component={WelcomeView} />
        <Stack.Screen name="DogDetails" component={DogDetailsView} />
        <Stack.Screen name="Chat" component={ChatView} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
