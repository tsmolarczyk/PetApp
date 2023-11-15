import React, { useState } from "react";

import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const screenHeight = Dimensions.get("window").height;

const LoginView = () => {
  const [loginName, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleLoginChange = login => {
    setLogin(login);
    console.log(loginName);
  };

  const handlePasswordChange = password => {
    setPassword(password);
  };

  const handleSignIn = () => {
    if (loginName === "Admin" && password === "admin") {
      console.log("LOGGING IN");
      navigation.navigate("Welcome");
    } else {
      console.log("wrong credentials");
    }
  };

  return (
    <View style={styles.containerView}>
      <Text>LoginView</Text>
      <TextInput
        style={styles.input}
        value={loginName}
        onChangeText={handleLoginChange}
        placeholder="Login"
        onSubmitEditing={() => {
          secondTextInput.focus();
        }}
        blurOnSubmit={false}
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={handlePasswordChange}
        placeholder="Password"
        secureTextEntry={true}
        ref={input => {
          secondTextInput = input;
        }}
        returnKeyType="go"
        onSubmitEditing={handleSignIn}
      />
      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    paddingTop: screenHeight / 6,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  }
});
