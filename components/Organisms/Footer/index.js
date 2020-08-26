import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { FontAwesome } from "@expo/vector-icons";
const Footer = () => {
  return (
    <View style={styles.box}>
      <MaterialCommunityIcons name="television-play" size={24} color="black" />
      <EvilIcons name="user" size={24} color="black" />
      <Ionicons name="ios-notifications-outline" size={24} color="black" />
      <FontAwesome name="bars" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
});

export default Footer;
