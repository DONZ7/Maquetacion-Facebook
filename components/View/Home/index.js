import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { Headers, Content, Footer } from "../../Organisms";

const Home = (data) => {
  return (
    <View style={styles.container}>
      <Headers data={data} />
      <Content data={data.fecha} />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 4,
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
    marginHorizontal: 60,
    marginTop: 10,
    justifyContent: "space-between",
  },
  count: {
    alignItems: "flex-end",
  },
});

export default Home;
