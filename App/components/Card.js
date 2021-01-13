import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import StarRating from "react-native-star-rating";
import colors from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";

function Card({ image, address1, address2, overallScore, bgColor = "noData" }) {
  if (overallScore >= 4) {
    bgColor = "good";
  } else if (overallScore >= 2.5 && overallScore < 4) {
    bgColor = "ok";
  } else if (overallScore < 2.5 && overallScore > 0) {
    bgColor = "bad";
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={["grey", colors[bgColor]]}
      start={{ x: 0.5, y: 0.65 }}
    >
      <Image source={image} style={styles.image} />
      <View style={styles.address}>
        <Text style={styles.address}>{address1}</Text>
        <Text style={styles.address}>{address2}</Text>
      </View>
      <View style={styles.rating}>
        <StarRating
          disabled={true}
          maxStars={5}
          iconSet={"FontAwesome"}
          fullStar={"star"}
          fullStarColor={"gold"}
          emptyStarColor={"black"}
          emptyStar={"star"}
          rating={overallScore}
        />
      </View>
    </LinearGradient>
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
    margin: 15,
  },
  image: {
    height: 275,
    resizeMode: "contain",
  },
  rating: {
    paddingTop: 20,
    paddingBottom: 20,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: colors.black,
    shadowOpacity: 0.7,
    shadowRadius: 8,
  },
});

export default Card;
