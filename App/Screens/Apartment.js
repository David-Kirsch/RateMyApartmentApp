import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import ReportCard from "../components/ReportCard";
import {
  MaterialCommunityIcons,
  Octicons,
  AntDesign,
} from "@expo/vector-icons";

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
      <View style={styles.tabs}>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() =>
            navigation.navigate("ReviewScreen", {
              reviews: data.all_comments,
            })
          }
        >
          <MaterialCommunityIcons
            name="comment-text-outline"
            size={25}
            color="black"
          />
          <Text style={{ color: "black", fontWeight: "600" }}>Reviews</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() =>
            navigation.navigate("ViolationScreen", {
              street_number: data.street_number,
              street_name: data.street_name,
            })
          }
        >
          <Octicons name="alert" size={25} color="#910606" />
          <Text style={{ color: "black", fontWeight: "600" }}>Violoations</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() =>
            navigation.navigate("ReviewScreen", { reviews: data.all_comments })
          }
        >
          <AntDesign name="Safety" size={25} color="green" />
          <Text style={{ color: "black", fontWeight: "600" }}>Safety</Text>
        </TouchableOpacity>
      </View>
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
  iconBtn: {
    backgroundColor: "lightgrey",
    width: 80,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  image: {
    width: "90%",
    height: 300,
    resizeMode: "cover",
    justifyContent: "center",
    alignSelf: "center",
    top: 15,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Apartment;
