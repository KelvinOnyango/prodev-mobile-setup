import React from "react";
import { StyleSheet, View, Text } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.entryText}>Entry Screen - Awesome</Text>
      <View style={styles.textContainer}>
        <Text style={styles.largeText}>
          Typescript is great if you practice more
        </Text>
        <Text style={styles.mediumText}>
          React Native provides you a single codebase for cross platforms
        </Text>
        <Text style={styles.smallText}>ALX is awesome</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#90caf9",
    padding: 20,
  },
  textContainer: {
    width: "100%",
    marginTop: 20,
  },
  entryText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  largeText: {
    fontSize: 30,
    color: "#f44336",
    marginBottom: 5,
    fontWeight: "700",
    fontVariant: ["small-caps"],
  },
  mediumText: {
    fontSize: 20,
    color: "#9c27b0",
    marginBottom: 10,
    fontWeight: "500",
    textAlign: "right",
  },
  smallText: {
    fontSize: 15,
    color: "#2196f3",
    fontWeight: "400",
    textAlign: "center",
  },
});

export default App;
