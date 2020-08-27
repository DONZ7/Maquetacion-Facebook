import React, { Fragment } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Reactions } from "../../Atoms";

const HeaderProfile = () => {
  const profile =
    "https://scontent.ftgu2-1.fna.fbcdn.net/v/t1.0-9/53217004_2161075367282244_5126724628114309120_n.jpg?_nc_cat=107&_nc_sid=174925&_nc_ohc=B6Q56hirjVsAX9e7g_2&_nc_ht=scontent.ftgu2-1.fna&oh=c2c1cfe89b43e41a65f723f9422afd21&oe=5F6AB1CE";

  return (
    <Fragment>
      <View style={styles.box}>
        <View style={styles.row}>
          <View>
            <Image
              style={styles.imageProfile}
              source={{ uri: profile }}
            ></Image>
          </View>
          <Text style={styles.font}>Noldin Zambrano</Text>
          <Text>actualizo su foto</Text>
          <AntDesign
            style={styles.info}
            name="ellipsis1"
            size={24}
            color="gray"
          />
        </View>
        <View style={styles.row}>
          <Text style={[styles.font, styles.gray]}> 3 de marzo</Text>
          <Fontisto name="earth" size={18} color="gray" />
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
  },
  box2: {
    backgroundColor: "lightgray",
    height: 8,
    marginVertical: 15,
  },
  image: {
    flex: 1,
    height: 300,
    marginVertical: 10,
  },
  imageProfile: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  info: {
    alignSelf: "flex-end",
  },
  font: {
    fontSize: 15,

    marginHorizontal: 10,
  },
  gray: {
    color: "gray",
  },
  column: {
    flexDirection: "column",
    marginHorizontal: 17,
  },
  row: {
    flexDirection: "row",
    marginHorizontal: 10,
    backgroundColor: "white",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default HeaderProfile;
