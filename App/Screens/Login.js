import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    if (username.length > 0 && password.length > 0) {
      props.submitHandler(username, password);
    }
  };

  return (
    <Screen>
      <AppTextInput
        placeholder="Username"
        icon="account"
        onChangeText={(text) => setUsername(text)}
      />
      <AppTextInput
        placeholder="Password"
        icon="lock"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <AppButton title="Submit" onPress={() => submitHandler()} color="great" />
    </Screen>
  );
}

export default Login;
