import React from "react";
import { Text, View, StyleSheet } from "react-native";
import colors from "../config/colors";

function ViolationCard({ data, colorStatus = "redStatus" }) {
  if (data.violationstatus === "Open") {
    colorStatus = "redStatus";
  } else {
    colorStatus = "greenStatus";
  }

  const date = data.inspectiondate.split("T");
  return (
    <View style={[styles.container, { backgroundColor: colors[colorStatus] }]}>
      <View style={styles.statusContainer}>
        <Text style={styles.status}>Violation Data Issued: </Text>
        <Text>{date[0]}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.status}>Status of Violation: </Text>
        <Text style={styles.status}>{data.violationstatus}</Text>
      </View>
      <View>
        <Text style={styles.status}>
          Description of Violation:
          <Text style={{ fontWeight: "400" }}> {data.novdescription}</Text>{" "}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1,
  },
  status: {
    fontWeight: "600",
  },
  statusContainer: {
    flexDirection: "row",
    fontWeight: "600",
  },
});

export default ViolationCard;
