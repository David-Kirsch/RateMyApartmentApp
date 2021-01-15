import React from "react";
import { Image, View, StyleSheet, Alert, Text, Dimensions } from "react-native";
import AppButton from "../components/AppButton";
import { StatusBar } from "expo-status-bar";
import { Colors } from "react-native/Libraries/NewAppScreen";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.layout}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.logoContainer}>
        <Image
          style={styles.image}
          source={require("../assets/RATEMYAPARTMENTLOGO.png")}
        />
        <Text style={styles.tagline}>Giving Tenants A Voice</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="View Apartments"
          onPress={() => navigation.navigate("ApartmentList")}
          color="black"
        />
        <AppButton
          title="Sign in"
          onPress={() => Alert.alert("Login")}
          color="secondary"
        />
        <AppButton
          title="New User"
          onPress={() => Alert.alert("Register")}
          color="secondary"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 20,
    width: "100%",
    bottom: -30,
    zIndex: 100,
  },
  image: {
    width: 300,
    height: 300,
  },
  layout: {
    height: Dimensions.get("window").height,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  tagline: {
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 10,
  },
});

export default WelcomeScreen;
