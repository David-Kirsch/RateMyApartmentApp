import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StarRating from "react-native-star-rating";

function Category({ category, title }) {
  return (
    <View style={styles.category}>
      <Text style={styles.title}>{title}: </Text>
      <StarRating
        iconSet={"FontAwesome"}
        halfStar={"star-half-o"}
        fullStar={"star"}
        emptyStarColor={"#8C823E"}
        fullStarColor={"#8C823E"}
        halfStarColor={"#8C823E"}
        maxStars={5}
        rating={category}
        starSize={25}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 5,
  },
  title: {
    alignSelf: "center",
    color: "black",
    fontSize: 17,
  },
});

export default Category;
