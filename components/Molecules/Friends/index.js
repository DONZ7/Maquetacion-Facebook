import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Friend from "../../Atoms/Friend";
const Friends = (data) => {
  const { name, likes } = data;
  const image =
    "https://concepto.de/wp-content/uploads/2014/03/modelo-e1551453273683.jpg";

  return (
    <View style={styles.box}>
      <View style={styles.column}>
        <Text style={styles.name}>Amigos</Text>
        <Text>5 amigos</Text>
      </View>
      <View style={styles.row}>
        {Array(6)
          .fill(data)
          .map((data) => {
            return <Friend />;
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    flexDirection: "column",
  },

  info: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    marginTop: 10,
  },
  column: {
    flexDirection: "column",
    marginHorizontal: 17,
  },
  row: {
    flexDirection: "row",
    marginHorizontal: 10,
    margin: 20,
    marginTop: 20,
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

export default Friends;
