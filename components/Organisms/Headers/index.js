import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Headers = (data) => {
  const { name } = data;
  return (
    <View style={styles.box}>
      <View style={styles.info}>
        <View style={styles.row}>
          <Ionicons name="ios-search" size={24} color="black" />
          <View style={styles.iconsContainer}>
            <Text style={styles.name}>Noldin</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    flex: 1,
    backgroundColor: "lightgray",
  },

  box: {
    backgroundColor: "white",
    flexDirection: "row",
    height: 50,
  },

  info: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  name: {
    fontSize: 17,
  },

  row: {
    flexDirection: "row",
    marginHorizontal: 60,
    marginTop: 10,
    justifyContent: "space-between",
  },
});

export default Headers;
