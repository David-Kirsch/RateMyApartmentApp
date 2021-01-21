import React from "react";
import { View, StyleSheet, Text } from "react-native";

function ProfileScreen(props) {
  return (
    <View>
      <Text style={styles.username}>David Kirsch</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  username: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default ProfileScreen;
