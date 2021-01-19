import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import Card from "./App/components/Card";
import ApartmentList from "./App/Screens/ApartmentList";
import WelcomeScreen from "./App/Screens/WelcomeScreen";
import Screen from "./App/components/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Apartment from "./App/Screens/Apartment";
import ReviewScreen from "./App/Screens/ReviewScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

let user = 1;

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerRight: () =>
        user && (
          <MaterialIcons
            name="account-circle"
            size={40}
            color="white"
            onPress={() => Alert.alert("Pressed")}
            style={styles.icon}
          />
        ),
      headerStyle: { backgroundColor: "#031e2b" },
      headerTintColor: "white",
    }}
  >
    {!user && (
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
          route.params.data.street_number + " " + route.params.data.street_name,
      })}
      component={Apartment}
    />
    <Stack.Screen
      name="ReviewScreen"
      options={{ title: "Reviews" }}
      component={ReviewScreen}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar style="light" />
        <StackNavigator />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    right: 15,
  },
});
