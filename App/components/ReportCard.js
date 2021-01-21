import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import StarRating from "react-native-star-rating";
import Category from "./Category";
import Grade from "../components/Grade";

function ReportCard({
  avgNoise,
  avgSafety,
  avgStaff,
  avgMaintenance,
  avgAppearance,
  overallScore,
}) {
  return (
    <ScrollView style={styles.reportCard}>
      <View style={styles.container}>
        <Text style={styles.title}>Report Card</Text>
        <View style={styles.letter}>
          {overallScore > 0 ? <Grade score={overallScore} /> : null}
        </View>
        <Category category={avgNoise} title={"Average Noise"} />
        <Category category={avgSafety} title={"Average Safety"} />
        <Category category={avgStaff} title={"Average Staff"} />
        <Category category={avgMaintenance} title={"Average Maintenance"} />
        <Category category={avgAppearance} title={"Average Appearance"} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
  },
  letter: {
    justifyContent: "center",
    alignSelf: "center",
    padding: 10,
  },
  reportCard: {
    padding: 10,
    alignSelf: "center",
    width: "90%",
    borderColor: "grey",
    borderWidth: 5,
    backgroundColor: "white",
    height: 250,
  },
  title: {
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});

export default ReportCard;
