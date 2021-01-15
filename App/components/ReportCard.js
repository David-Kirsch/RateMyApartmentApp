import React from "react";
import { View, StyleSheet, Text } from "react-native";
import StarRating from "react-native-star-rating";
import Category from "./Category";

function ReportCard({
  avgNoise,
  avgSafety,
  avgStaff,
  avgMaintenance,
  avgAppearance,
}) {
  return (
    <View style={styles.reportCard}>
      <Text style={styles.title}>Report Card</Text>
      <Category category={avgNoise} title={"Noise"} />
      <Category category={avgSafety} title={"Safety"} />
      <Category category={avgStaff} title={"Staff"} />
      <Category category={avgMaintenance} title={"Maintenance"} />
      <Category category={avgAppearance} title={"Appearance"} />
    </View>
  );
}

console.log(arguments);

const styles = StyleSheet.create({
  reportCard: {
    padding: 10,
    alignSelf: "center",
    width: "90%",
    borderColor: "#034163",
    borderWidth: 10,
    // overflow: "hidden",
    backgroundColor: "white",
    shadowColor: "black",
    shadowRadius: 5,
    shadowOpacity: 1,
    height: 250,
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});

export default ReportCard;
