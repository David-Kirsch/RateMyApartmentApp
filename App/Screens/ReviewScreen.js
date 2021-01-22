import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ReviewCard from "../components/ReviewCard";
import Screen from "../components/Screen";

function ReviewScreen({ route }) {
  const reviewsArr = route.params.reviews;

  return (
    <Screen>
      <View style={styles.container}>
        <FlatList
          data={reviewsArr}
          keyExtractor={(reviewsArr) => reviewsArr.username}
          renderItem={({ item }) => (
            <ReviewCard name={item.username} review={item.review} />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 200,
    height: 200,
    backgroundColor: "red",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    margin: 10,
  },
});

export default ReviewScreen;
