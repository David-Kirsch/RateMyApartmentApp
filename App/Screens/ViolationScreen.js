import React, { useState, useEffect } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { keys } from "../../keys";
import Screen from "../components/Screen";
import ViolationCard from "../components/ViolationCard";
import colors from "../config/colors";

function ViolationScreen({ route }) {
  const [violations, setViolations] = useState([]);

  const getCount = () => {
    return violations.filter((v) => v.violationstatus === "Open").length;
  };

  useEffect(() => {
    const street_number_string = route.params.street_number.toString();
    const street_name_URI = encodeURI(route.params.street_name.toUpperCase());
    const config = {
      method: "GET",
      headers: {
        "X-App-Token": keys,
      },
    };

    fetch(
      `https://data.cityofnewyork.us/resource/wvxf-dwi5.json?housenumber=${street_number_string}&streetname=${street_name_URI}`,
      config
    )
      .then((resp) => resp.json())
      .then((data) => {
        const sortedV = data.sort(function (a, b) {
          let dateA = new Date(a.inspectiondate);
          let dateB = new Date(b.inspectiondate);
          return dateB - dateA;
        });
        setViolations(sortedV);
      });
  }, [violations.length]);

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={[styles.snapshot, { color: colors.redStatus }]}>
          Open: {getCount()}
        </Text>
        <Text style={[styles.snapshot, { color: colors.greenStatus }]}>
          Closed: {violations.length - getCount()}
        </Text>
      </View>
      <FlatList
        data={violations}
        keyExtractor={(violation) => violation.violationid}
        renderItem={({ item }) => <ViolationCard data={item} />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  snapshot: {
    color: "white",
    padding: 15,
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center",
  },
});

export default ViolationScreen;
