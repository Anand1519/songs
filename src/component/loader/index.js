import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./styles";

const Loader = ({ loading }) => {
  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="blue" />}
    </View>
  );
};

export default Loader;
