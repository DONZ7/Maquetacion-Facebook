import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const Information = (data) => {
  const { name, likes } = data;
  const image =
    "https://concepto.de/wp-content/uploads/2014/03/modelo-e1551453273683.jpg";

  return (
    <View style={styles.box}>
      <View style={styles.row}>
        <Entypo name="briefcase" size={24} color="gray" />
        <Text style={styles.space}>Ingeniero en sistemas</Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="ios-school" size={24} color="gray" />
        <Text style={styles.space}>Estudio en </Text>
        <Text style={styles.bold}>UNAH </Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="ios-home" size={24} color="gray" />
        <Text style={styles.space}>Vive en </Text>
        <Text style={styles.bold}>Talanga </Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="ios-heart" size={24} color="gray" />
        <Text style={styles.space}>En una Relacion</Text>
      </View>
      <View style={styles.row}>
        <AntDesign name="ellipsis1" size={24} color="gray" />
        <Text style={styles.space}>Ver la informacion de </Text>
        <Text style={styles.bold}>Noldin </Text>
      </View>
      <View style={styles.separator}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    paddingTop: 50,
  },

  box: {
    backgroundColor: "white",
    flexDirection: "column",
  },
  image: {
    width: 150,
    height: 150,
  },
  info: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  bold: { fontWeight: "bold" },
  info: {
    alignSelf: "flex-end",
  },
  name: {
    fontSize: 20,
    marginTop: 10,
  },
  iconsContainer: {
    flex: 1,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    marginHorizontal: 10,
    margin: 9,
    marginTop: 10,
    justifyContent: "flex-start",
  },
  space: { marginLeft: 10 },
  separator: {
    marginVertical: 8,
    marginHorizontal: 10,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Information;
