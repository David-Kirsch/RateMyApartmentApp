import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Category from "./Category";

function ReviewCard({ name, review }) {
  console.log(review);
  return (
    <View style={styles.container}>
      <View style={styles.reviewData}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <Text>{review.created_at}</Text>
      </View>
      <Category category={review.rating_noise} title={"Noise"} />
      <Category category={review.rating_safety} title={"Safety"} />
      <Category category={review.rating_staff} title={"Staff"} />
      <Category category={review.rating_maintenance} title={"Maintenance"} />
      <Category category={review.rating_appearance} title={"Appearance"} />
      <Text style={styles.message}>{review.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
    marginVertical: 5,
  },
  message: {
    fontSize: 20,
    fontFamily: "Bradley Hand",
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { x: 5, y: 5 },
    textShadowRadius: 5,
  },
  nameContainer: {
    backgroundColor: "grey",
    borderRadius: 20,
    padding: 8,
    borderWidth: 1,
    borderColor: "black",
  },
  reviewData: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
});

export default ReviewCard;
