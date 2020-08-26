import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Publications = () => {
  return (
    <View>
      <Text style={styles.font}>Publicaciones</Text>
      <View style={styles.separator}></View>
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
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Publications;
