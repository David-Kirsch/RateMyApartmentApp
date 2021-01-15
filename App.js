import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Card from "./App/components/Card";
import ApartmentList from "./App/Screens/ApartmentList";
import WelcomeScreen from "./App/Screens/WelcomeScreen";
import Screen from "./App/components/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Apartment from "./App/Screens/Apartment";

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="view apartments"
      onPress={() => navigation.navigate("TweetDetails")}
    />
  </Screen>
);

const TweetDetails = () => (
  <Screen>
    <Text>TweetDetails</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Rate My Apartment" component={WelcomeScreen} />
    <Stack.Screen name="ApartmentList" component={ApartmentList} />
    <Stack.Screen name="Apartment" component={Apartment} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
