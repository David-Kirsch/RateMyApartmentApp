import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import StarRating from "react-native-star-rating";

function Card(props) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/apt.jpg")} style={styles.image} />
      <View style={styles.address}>
        <Text style={styles.address}>650 42nd Street</Text>
        <Text style={styles.address}>New York, NY 10036</Text>
      </View>
      <View style={styles.rating}>
        <StarRating
          disabled={true}
          maxStars={5}
          fullStarColor={"gold"}
          emptyStarColor={"black"}
          rating={4}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  address: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  container: {
    borderRadius: 20,
    top: 30,
    overflow: "hidden",
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    margin: 15,
  },
  image: {
    height: 275,
    resizeMode: "contain",
  },
  rating: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default Card;
