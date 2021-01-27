import React, { useContext, useState } from "react";
import {
  Image,
  View,
  StyleSheet,
  Alert,
  Text,
  Dimensions,
  Modal,
  Button,
  TextInput,
} from "react-native";
import AppButton from "../components/AppButton";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthContext from "../auth/context";
import Login from "../Screens/Login";
import Screen from "../components/Screen";
import { baseURL } from "../../keys";

function WelcomeScreen({ navigation }) {
  const [isVisible, setIsVisible] = useState(false);

  const authContext = useContext(AuthContext);

  const signin = (username, password) => {
    fetch(`${baseURL}/users`)
      .then((resp) => resp.json())
      .then((data) => {
        let found = data.filter(
          (user) =>
            user.username.toLowerCase() === username.toLowerCase() &&
            user.password.toLowerCase() === password.toLowerCase()
        );
        found[0]
          ? authContext.setUser(found[0].id)
          : authContext.setUser(undefined);
      });
  };

  return (
    <>
      <View style={styles.layout}>
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
            onPress={() => setIsVisible(true)}
            color="secondary"
          />
          <AppButton
            title="New User"
            onPress={() => Alert.alert("Register")}
            color="secondary"
          />
        </View>
      </View>
      <Modal visible={isVisible} animationType="slide">
        <Login
          submitHandler={(username, password) => signin(username, password)}
        />
        <Button title="Close" onPress={() => setIsVisible(false)} />
      </Modal>
    </>
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
