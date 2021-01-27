import React, { useContext, useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
} from "react-native";
import ApartmentList from "./App/Screens/ApartmentList";
import WelcomeScreen from "./App/Screens/WelcomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Apartment from "./App/Screens/Apartment";
import ReviewScreen from "./App/Screens/ReviewScreen";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import ViolationScreen from "./App/Screens/ViolationScreen";
import ProfileScreen from "./App/Screens/ProfileScreen";
import AuthContext from "./App/auth/context";

export default function App() {
  const [user, setUser] = useState(undefined);

  const Stack = createStackNavigator();
  const StackNavigator = () => (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        gestureEnabled: false,
        headerBackTitle: "Back",
        headerRight: () =>
          user != undefined ? (
            <MaterialIcons
              name="account-circle"
              size={40}
              color="white"
              style={styles.icon}
              onPress={() => navigation.navigate("ProfileScreen")}
            />
          ) : (
            <AntDesign
              name="home"
              size={30}
              color="white"
              style={styles.icon}
              onPress={() => navigation.navigate("Rate My Apartment")}
            />
          ),
        headerStyle: { backgroundColor: "#031e2b" },
        headerTintColor: "white",
      })}
    >
      {user === undefined && (
        <Stack.Screen
          name="Rate My Apartment"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
      )}
      <Stack.Screen
        name="ApartmentList"
        options={{
          title: "Apartments",
        }}
        component={ApartmentList}
      />
      <Stack.Screen
        name="Apartment"
        options={({ route }) => ({
          title:
            route.params.data.street_number +
            " " +
            route.params.data.street_name,
        })}
        component={Apartment}
      />
      <Stack.Screen
        name="ReviewScreen"
        options={{ title: "Reviews" }}
        component={ReviewScreen}
      />
      <Stack.Screen
        name="ViolationScreen"
        options={{
          title: "Violations",
          headerStyle: { backgroundColor: "red" },
        }}
        component={ViolationScreen}
      />
      <Stack.Screen
        name="ProfileScreen"
        options={{ title: "Profile", headerRight: () => "" }}
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <StatusBar style="light" />
        <StackNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  icon: {
    right: 15,
  },
});
