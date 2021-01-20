import React from "react";
import { Text, View, StyleSheet } from "react-native";
import colors from "../config/colors";

function ViolationCard({ data, colorStatus = "terrible" }) {
  if (data.violationstatus === "Open") {
    colorStatus = "terrible";
  } else {
    colorStatus = "great";
  }

  const date = data.inspectiondate.split("T");
  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <Text style={styles.status}>Violation Data Issued: </Text>
        <Text>{date[0]}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.status}>Status of Violation: </Text>
        <Text style={[styles.status, { color: colors[colorStatus] }]}>
          {data.violationstatus}
        </Text>
      </View>
      <View>
        <Text style={styles.status}>Description of Violation: </Text>
        <Text>{data.novdescription}</Text>
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
