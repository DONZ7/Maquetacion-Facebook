import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Friend = (data) => {
  const { name, likes } = data;
  const image =
    "https://concepto.de/wp-content/uploads/2014/03/modelo-e1551453273683.jpg";

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image style={styles.image} source={{ uri: image }}></Image>
        <View style={styles.info}>
          <Text style={styles.name}>Hola</Text>
          <Text style={styles.gray}>3 amigos en comun </Text>
        </View>
        <View style={styles.row}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fffafa",
  },

  box: {
    backgroundColor: "white",
    flexDirection: "column",
    marginTop: 13,
    width: 102,
    height: 160,
    margin: 5,
    justifyContent: "center",
    borderRadius: 5,
  },
  image: {
    width: 102,
    height: 102,
    borderRadius: 5,
  },
  info: {
    flexDirection: "column",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
  },
  row: {
    flexDirection: "row",
    marginHorizontal: 60,
    marginTop: 10,
    justifyContent: "space-between",
  },
  gray: {
    color: "gray",
  },
});

export default Friend;
