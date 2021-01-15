import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Apartment({ route }) {
  console.log(route.params.item);
  const data = route.params.data;
  return (
    <View style={styles.background}>
      <Image style={styles.image} source={{ uri: data.photoImg }} />
      <Text style={styles.address}>
        {`${data.address1}\n${data.address2}`}{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  address: {
    marginTop: 20,
    alignSelf: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 20,
    paddingBottom: 10,
  },
  background: {
    backgroundColor: "#023047",
  },
  image: {
    width: "90%",
    height: 300,
    resizeMode: "cover",
    justifyContent: "center",
    alignSelf: "center",
    top: 15,
  },
});

export default Apartment;
