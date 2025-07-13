import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ImageBackground
          source={require("@/assets/images/background-image.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image
                source={require("@/assets/images/Logo.png")}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textLarge}>
                Find your favorite place here
              </Text>
              <Text style={styles.textSmall}>The best prices for over 2</Text>
              <Text style={styles.textSmall}>million properties worldwide</Text>
            </View>

            <View style={styles.buttonContainer}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.primaryButton}>
                  <Text style={styles.primaryButtonText}>Join here</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.secondaryButton}>
                  <Text style={styles.secondaryButtonText}>Sign In</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.navigationPrompt}>
                <Text style={styles.navigationText}>Continue to home</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "transparent",
  },
  background: {
    flex: 1,
    width: "100%",
    height: windowHeight,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  logo: {
    width: 150,
    height: 150,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  textLarge: {
    color: "white",
    fontSize: 40,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 12,
  },
  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },
  buttonContainer: {
    marginBottom: 40,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    marginBottom: 20,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 40,
    paddingVertical: 15,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: "transparent",
    borderRadius: 40,
    paddingVertical: 15,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  primaryButtonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "600",
  },
  secondaryButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  navigationPrompt: {
    alignItems: "center",
  },
  navigationText: {
    color: "white",
    fontSize: 16,
  },
});
