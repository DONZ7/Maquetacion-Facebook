import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Reactions = (data) => {
  const { name, likes } = data;
  const image =
    "https://concepto.de/wp-content/uploads/2014/03/modelo-e1551453273683.jpg";

  return (
    <View style={styles.box}>
      <View style={styles.column}>
        <View style={[styles.row]}>
          <View style={styles.iconsContainer}>
            <AntDesign name="like1" size={15} color="blue" />
            <MaterialCommunityIcons name="heart-circle" size={15} color="red" />
            <MaterialIcons name="tag-faces" size={15} color="black" />
            <Text style={[styles.font, styles.margin]}>201</Text>
          </View>

          <View style={styles.margin}>
            <Text style={styles.font}>11 comentarios</Text>
          </View>

          <View style={styles.margin}>
            <Text style={styles.font}>5 veces compartido</Text>
          </View>
        </View>
        <View style={styles.row}>
          <FontAwesome5 name="share" size={20} color="gray" />
          <Text style={styles.gray} size={20}>
            Compartir
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
  },
  image: {
    width: 150,
    height: 150,
  },
  column: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  font: {
    fontSize: 12,
    color: "gray",
  },
  gray: {
    color: "gray",
  },
  iconsContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: "white",
  },
  margin: {
    margin: 10,
  },
});

export default Reactions;
