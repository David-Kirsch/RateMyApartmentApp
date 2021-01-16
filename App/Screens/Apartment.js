import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import StarRating from "react-native-star-rating";
import ReportCard from "../components/ReportCard";

function Apartment({ route, navigation }) {
  const data = route.params.data;
  const address1 = `${data.street_number.toString()} ${data.street_name} `;
  const address2 = `${data.city}, ${data.state} ${data.zipcode.toString()}`;

  const overallScore =
    (data.avgScore_appearance +
      data.avgScore_maintenance +
      data.avgScore_safety +
      data.avgScore_staff +
      data.avgScore_noise) /
    5;

  return (
    <View style={styles.background}>
      <Image style={styles.image} source={{ uri: data.photoImg }} />
      <Text style={styles.address}>{`${address1}\n${address2}`} </Text>
      <View style={styles.reportCard}>
        <ReportCard
          overallScore={overallScore}
          avgNoise={data.avgScore_noise}
          avgAppearance={data.avgScore_appearance}
          avgSafety={data.avgScore_safety}
          avgStaff={data.avgScore_staff}
          avgMaintenance={data.avgScore_maintenance}
        />
      </View>
      <Button
        title="Reviews"
        onPress={() =>
          navigation.navigate("ReviewScreen", { reviews: data.all_comments })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  address: {
    marginTop: 20,
    alignSelf: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 20,
    paddingBottom: 10,
    textAlign: "center",
  },
  background: {
    flex: 1,
    backgroundColor: "#023047",
  },
  image: {
    width: "90%",
    height: 300,
    resizeMode: "cover",
    justifyContent: "center",
    alignSelf: "center",
    top: 15,
  },
  reportCard: {},
});

export default Apartment;
