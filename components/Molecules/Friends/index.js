import React from "react";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";

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
        <Text style={styles.gray}>5 amigos</Text>
      </View>
      <View style={styles.row}>
        {Array(6)
          .fill(data)
          .map((data) => {
            return <Friend />;
          })}
      </View>
      <View style={styles.box2}>
        <Text style={styles.name}>Ver todos los amigos</Text>
      </View>
      <View style={styles.separator}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    flexDirection: "column",
  },
  box2: {
    backgroundColor: "#d3d3d3",
    flexDirection: "column",
    height: 40,
    marginHorizontal: 10,
    borderRadius: 4,
    alignItems: "center",
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
    marginTop: 10,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 15,
    marginHorizontal: 10,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  gray: {
    color: "gray",
  },
});

export default Friends;

/*   <Button
          title="Agregar amigos"
          onPress={() => Alert.alert("Amigo agregado")}
        />*/
