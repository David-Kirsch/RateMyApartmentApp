import React, { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { keys } from "../../keys";
import Screen from "../components/Screen";
import ViolationCard from "../components/ViolationCard";

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

    console.log(street_name_URI);
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
      <Text>
        Open: {getCount()} Closed: {violations.length - getCount()}{" "}
      </Text>
      <FlatList
        data={violations}
        keyExtractor={(violation) => violation.violationid}
        renderItem={({ item }) => <ViolationCard data={item} />}
      />
    </Screen>
  );
}

export default ViolationScreen;
