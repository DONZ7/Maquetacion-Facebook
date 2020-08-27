import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Friend } from "../../Atoms";

const Publications = () => {
  return (
    <View>
      <Text style={styles.font}>Publicaciones</Text>
      <ScrollView style={styles.box}>
        <Friend />
        <Friend />
        <Friend />
        <Friend />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "gray",
    flexDirection: "row",
    height: 150,
  },
  box2: {
    backgroundColor: "lightgray",
    height: 8,

    flexDirection: "column",
  },

  info: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  font: {
    fontSize: 20,
    marginTop: 2,
    marginHorizontal: 10,
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
  separator: {
    marginVertical: 8,
    marginHorizontal: 10,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Publications;
