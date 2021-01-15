import React from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

function ApartmentList({ navigation }) {
  const apts = [
    {
      id: 1,
      image: require("../assets/apt.jpg"),
      address1: "650 W. 42nd Street",
      address2: "New York, NY 10036",
      overallScore: 5.0,
    },
    {
      id: 2,
      image: require("../assets/apt2.jpg"),
      address1: "271 W. 78th street",
      address2: "New York, NY 10024",
      overallScore: 0,
    },
    {
      id: 3,
      image: require("../assets/apt3.jpg"),
      address1: "3 Hudson Street",
      address2: "New York, NY 10001",
      overallScore: 2.5,
    },
    {
      id: 4,
      image: require("../assets/apt4.jpg"),
      address1: "67 E. 58th Street",
      address2: "New York, NY 10018",
      overallScore: 1,
    },
    {
      id: 5,
      image: require("../assets/apt5.jpg"),
      address1: "322 Broadway Avenue",
      address2: "New York, NY 10012",
      overallScore: 4,
    },
  ];
  return (
    <Screen>
      <FlatList
        data={apts}
        keyExtractor={(apt) => apt.id.toString()}
        renderItem={({ item }) => (
          <Card
            address1={item.address1}
            address2={item.address2}
            image={item.image}
            overallScore={item.overallScore}
            onPress={() => navigation.navigate("Apartment", { data: item })}
          />
        )}
      />
    </Screen>
  );
}

export default ApartmentList;
