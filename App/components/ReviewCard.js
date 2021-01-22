import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Category from "./Category";
import { AntDesign } from "@expo/vector-icons";

function ReviewCard({ name, review }) {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const overallScore =
    (review.rating_appearance +
      review.rating_maintenance +
      review.rating_noise +
      review.rating_safety +
      review.rating_staff) /
    5;

  console.log("CARD!! ", review);

  return (
    <View style={styles.container}>
      <View style={styles.reviewData}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <Text>{review.created_at}</Text>
      </View>
      <TouchableOpacity onPress={() => toggleHandler()}>
        {!toggle && (
          <View style={styles.dropdown}>
            <Category category={overallScore} title={"Overall"} />
            <AntDesign name="down" size={24} color="black" />
          </View>
        )}
        {toggle && (
          <View>
            <Category category={review.rating_noise} title={"Noise"} />
            <Category category={review.rating_safety} title={"Safety"} />
            <Category category={review.rating_staff} title={"Staff"} />
            <Category
              category={review.rating_maintenance}
              title={"Maintenance"}
            />
            <View style={[styles.dropdown, { paddingRight: 85 }]}>
              <Category
                category={review.rating_appearance}
                title={"Appearance"}
              />
              <AntDesign name="up" size={24} color="black" />
            </View>
          </View>
        )}
      </TouchableOpacity>
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
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingRight: 125,
    alignItems: "center",
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
