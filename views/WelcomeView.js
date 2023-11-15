import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

const WelcomeView = () => {
  return (
    <View>
      <Text>Hello Guest!</Text>
    </View>
  );
};

export default WelcomeView;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 120,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  container: {
    color: "red"
  }
});
