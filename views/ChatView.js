import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button
} from "react-native";
import GradientWrapper from "../components/GradientWrapper";

const ChatView = ({ route }) => {
  const { dog } = route.params;
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleSend = () => {
    if (message.trim()) {
      setChat([...chat, { text: message, sender: "You" }]);
      setMessage("");
      setTimeout(() => {
        setChat(chat => [
          ...chat,
          { text: `Response from ${dog.name}'s owner`, sender: "Owner" }
        ]);
      }, 2000);
    }
  };

  return (
    <GradientWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Chat with {dog.name}'s Owner</Text>
        <ScrollView style={styles.chatContainer}>
          {chat.map((msg, index) => (
            <View
              key={index}
              style={
                msg.sender === "You" ? styles.userMessage : styles.ownerMessage
              }
            >
              <Text>{msg.text}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            placeholder="Type a message..."
          />
          <Button title="Send" onPress={handleSend} />
        </View>
      </View>
    </GradientWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center"
  },
  chatContainer: {
    flex: 1,
    padding: 10
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 20,
    alignItems: "center"
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
    marginRight: 10,
    borderRadius: 5
  },
  userMessage: {
    alignSelf: "flex-end",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#e7e7e7",
    borderRadius: 10
  },
  ownerMessage: {
    alignSelf: "flex-start",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#d1f5d3",
    borderRadius: 10
  }
});

export default ChatView;
