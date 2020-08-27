import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const Footer = () => {
  return (
    <View style={styles.box}>
      <Entypo name="browser" size={24} color="blue" />
      <MaterialCommunityIcons name="television-play" size={24} color="gray" />
      <Entypo name="shop" size={24} color="gray" />
      <EvilIcons name="user" size={24} color="gray" />
      <Ionicons name="ios-notifications-outline" size={24} color="gray" />
      <FontAwesome name="bars" size={24} color="gray" />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
  },
});

export default Footer;
