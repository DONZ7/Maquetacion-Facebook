import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Friend, Publication } from "../../Atoms";

const Publications = () => {
  return (
    <View>
      <Text style={styles.font}>Publicaciones</Text>
      <View style={styles.box2}></View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.box}
      >
        <Publication />
        <Publication />

        <View style={styles.boxPublications}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  boxPublications: {
    backgroundColor: "white",

    height: 150,
    width: 200,
  },
  box: {
    backgroundColor: "white",
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
    marginVertical: 10,
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
