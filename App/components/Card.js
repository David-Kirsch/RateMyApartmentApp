import React from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import StarRating from "react-native-star-rating";
import colors from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";

function Card({
  image,
  address1,
  address2,
  overallScore,
  bgColor = "noData",
  onPress,
  numOfReviews,
}) {
  switch (true) {
    case overallScore === 5:
      bgColor = "great";
      break;
    case overallScore >= 4:
      bgColor = "good";
      break;
    case overallScore >= 3:
      bgColor = "ok";
      break;
    case overallScore >= 2:
      bgColor = "bad";
      break;
    case overallScore >= 1:
      bgColor = "terrible";
      break;
    default:
      bgColor = "noData";
      break;
  }

  return (
    <View style={styles.card}>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <LinearGradient
          style={styles.container}
          colors={["#023047", colors[bgColor]]}
          start={{ x: 0.5, y: 0.7 }}
        >
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.address}>
            <Text adjustsFontSizeToFit numberOfLines={1} style={styles.address}>
              {address1}
            </Text>
            <Text adjustsFontSizeToFit numberOfLines={1} style={styles.address}>
              {address2}
            </Text>
          </View>
          <View>
            <Text style={styles.review}>{`${numOfReviews} Reviews`}</Text>
          </View>
          <View style={styles.rating}>
            <StarRating
              disabled={true}
              iconSet={"FontAwesome"}
              halfStar={"star-half-o"}
              fullStar={"star"}
              emptyStarColor={"#8C823E"}
              fullStarColor={"#8C823E"}
              halfStarColor={"#8C823E"}
              maxStars={5}
              rating={overallScore}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  address: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  card: {
    shadowOffset: { width: 0, height: 7 },
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  container: {
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    // borderWidth: 3,
    // borderColor: "black",
  },
  image: {
    height: 275,
    width: "100%",
    resizeMode: "cover",
  },
  rating: {
    paddingTop: 5,
    paddingBottom: 20,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: colors.black,
    shadowOpacity: 0.9,
    shadowRadius: 2,
  },
  review: {
    margin: 10,
    color: "black",
    fontWeight: "600",
    fontSize: 20,
  },
});

export default Card;
