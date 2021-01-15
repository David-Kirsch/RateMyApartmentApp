import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function Grade({ score }) {
  let color, letter;

  switch (true) {
    case score === 5:
      letter = "A";
      color = colors.great;
      break;
    case score >= 4:
      letter = "B";
      color = colors.good;
      break;
    case score >= 3:
      letter = "C";
      color = colors.ok;
      break;
    case score >= 2:
      letter = "D";
      color = colors.bad;
      break;
    case score >= 1:
      letter = "E";
      color = colors.terrible;
      break;
    default:
      letter = "";
      color = "transparent";
      break;
  }
  return (
    <View style={styles.box}>
      <View style={[styles.circle, { backgroundColor: color }]}>
        <Text style={styles.letter}>{letter}</Text>
      </View>
      <Text style={styles.score}>Score: {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 120,
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
    shadowOffset: { x: 5, y: 5 },
    shadowColor: "black",
    shadowRadius: 3,
    shadowOpacity: 1,
    backgroundColor: "white",
  },
  circle: {
    backgroundColor: "green",
    width: 75,
    height: 75,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
  },
  letter: {
    fontSize: 50,
    fontWeight: "600",
  },
  score: {
    alignSelf: "center",
    marginTop: 5,
    fontWeight: "500",
    fontSize: 15,
  },
});

export default Grade;
