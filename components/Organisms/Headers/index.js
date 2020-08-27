import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Headers = (data) => {
  const { name } = data;
  return (
    <View style={styles.box}>
      <View>
        <View style={styles.row}>
          <View>
            <Ionicons name="ios-search" size={24} color="gray" />
          </View>
          <View style={styles.searchSection}>
            <TextInput
              style={styles.name}
              placeholder="Buscar"
              underlineColorAndroid="transparent"
            />
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
    backgroundColor: "lightgray",
    flexDirection: "row",
    height: 40,
    marginHorizontal: 30,
    marginVertical: 8,
    borderRadius: 50,
  },

  info: {},
  name: {
    fontSize: 17,
  },

  row: {
    flexDirection: "row",
    marginHorizontal: 12,
    marginTop: 10,
    justifyContent: "space-between",
  },

  searchSection: {
    marginHorizontal: 10,
    width: 240,
    color: "#424242",
    alignItems: "flex-start",
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
  },
});

export default Headers;
