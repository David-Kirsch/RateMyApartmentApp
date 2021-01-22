import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Alert, Button } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { baseURL } from "../../keys";
import { MaterialIcons } from "@expo/vector-icons";

function ApartmentList({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/apartments`)
      .then((resp) => resp.json())
      .then((data) => setApartments(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Screen>
      <FlatList
        data={apartments}
        keyExtractor={(apartments) => apartments.id.toString()}
        renderItem={({ item }) => (
          <Card
            address1={`${item.street_number.toString()} ${item.street_name} `}
            address2={`${item.city}, ${item.state} ${item.zipcode.toString()}`}
            image={item.photoImg}
            overallScore={
              (item.avgScore_appearance +
                item.avgScore_maintenance +
                item.avgScore_safety +
                item.avgScore_staff +
                item.avgScore_noise) /
              5
            }
            numOfReviews={item.all_comments.length}
            onPress={() =>
              navigation.navigate("Apartment", {
                data: item,
              })
            }
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  icon: {
    right: 15,
  },
});

export default ApartmentList;
