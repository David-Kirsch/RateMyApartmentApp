import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
import AuthContext from "../auth/context";
import { baseURL } from "../../keys";
import ReviewCard from "../components/ReviewCard";

function ProfileScreen({ navigation }) {
  const [userData, setUserData] = useState([]);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetch(`${baseURL}/users/${authContext.user}`)
      .then((resp) => resp.json())
      .then((data) => {
        setUserData(data);
      })
      .catch(function (error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
      });
  }, []);

  const logout = () => {
    authContext.setUser(undefined);
  };

  const name = userData["username"];

  return (
    <View>
      <Text style={styles.username}>{userData.username}</Text>
      <View style={styles.myReviews}>
        <FlatList
          data={userData.my_comments}
          keyExtractor={(review) => review.review.id.toString()}
          renderItem={({ item }) => (
            <ReviewCard
              name={name}
              review={item.review}
              key={item.review.id.toString()}
            />
          )}
        />
      </View>
      <Button
        onPress={() => {
          logout();
          setTimeout(() => {
            navigation.navigate("Rate My Apartment");
          }, 50);
        }}
        title="Logout"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  myReviews: {
    padding: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default ProfileScreen;
