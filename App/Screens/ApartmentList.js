import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";

function ApartmentList(props) {
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
      image: require("../assets/apt.jpg"),
      address1: "650 W. 42nd Street",
      address2: "New York, NY 10036",
      overallScore: 0,
    },
    {
      id: 3,
      image: require("../assets/apt.jpg"),
      address1: "650 W. 42nd Street",
      address2: "New York, NY 10036",
      overallScore: 2.5,
    },
    {
      id: 4,
      image: require("../assets/apt.jpg"),
      address1: "650 W. 42nd Street",
      address2: "New York, NY 10036",
      overallScore: 1,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={apts}
        keyExtractor={(apt) => apt.id.toString()}
        renderItem={({ item }) => (
          <Card
            address1={item.address1}
            address2={item.address2}
            image={item.image}
            overallScore={item.overallScore}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: colors.black,
    shadowOpacity: 0.7,
    shadowRadius: 8,
    // backgroundColor: colors.black,
  },
});

export default ApartmentList;
