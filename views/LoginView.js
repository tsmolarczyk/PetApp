import React, { useState, useRef } from "react";

import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GradientWrapper from "../components/GradientWrapper";

const screenHeight = Dimensions.get("window").height;

const LoginView = () => {
  const [loginName, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigation = useNavigation();
  const secondTextInput = useRef(null);

  const handleLoginChange = login => {
    setLogin(login);
    setErrorMessage("");

    console.log(loginName);
  };

  const handlePasswordChange = password => {
    setPassword(password);
    setErrorMessage("");
  };

  const handleSignIn = () => {
    if (loginName === "A" && password === "a") {
      console.log("LOGGING IN");
      navigation.navigate("Welcome");
    } else {
      setErrorMessage("Wrong username or password!");
      console.log("wrong credentials");
    }
  };

  return (
    <GradientWrapper>
      <View style={styles.containerView}>
        <Text>LoginView</Text>
        <TextInput
          style={styles.input}
          value={loginName}
          onChangeText={handleLoginChange}
          placeholder="Login"
          onSubmitEditing={() => secondTextInput.current.focus()}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={handlePasswordChange}
          placeholder="Password"
          secureTextEntry={true}
          ref={secondTextInput}
          returnKeyType="go"
          onSubmitEditing={handleSignIn}
        />
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

        <Button title="Sign in" onPress={handleSignIn} />
      </View>
    </GradientWrapper>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    paddingTop: screenHeight / 6,
    alignItems: "center"
  },
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  },
  error: {
    color: "red",
    marginTop: 10
  }
});
