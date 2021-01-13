import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "../components/Card";

function ApartmentList(props) {
  let list = [1, 2, 3, 4, 5];
  //   const renderCards = () => {
  //     list.map((card) => <Card />);
  //   };
  return (
    <View style={styles.container}>
      {list.map((card) => (
        <Card />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ApartmentList;
