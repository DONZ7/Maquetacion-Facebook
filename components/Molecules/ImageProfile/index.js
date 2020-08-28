import React, { Fragment } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Reactions, HeaderProfile } from "../../Atoms";

const ImageProfile = () => {
  const image =
    "https://scontent.ftgu2-1.fna.fbcdn.net/v/t1.0-9/107826573_3163875227002248_122816155127681500_n.jpg?_nc_cat=110&_nc_sid=e3f864&_nc_ohc=4MnNgjg_VYYAX-jljS2&_nc_ht=scontent.ftgu2-1.fna&oh=dcea86fb533fa74d9a8783a6cecf00c1&oe=5F6AB58D";
  const profile =
    "https://scontent.ftgu2-1.fna.fbcdn.net/v/t1.0-9/53217004_2161075367282244_5126724628114309120_n.jpg?_nc_cat=107&_nc_sid=174925&_nc_ohc=B6Q56hirjVsAX9e7g_2&_nc_ht=scontent.ftgu2-1.fna&oh=c2c1cfe89b43e41a65f723f9422afd21&oe=5F6AB1CE";

  return (
    <Fragment>
      <View style={styles.box2}></View>
      <View style={styles.box}>
        <HeaderProfile />
        <View style={styles.container}>
          <ImageBackground style={styles.background} source={{ uri: image }}>
            <View style={styles.backgro}>
              <Image style={styles.image} source={{ uri: profile }}></Image>
            </View>
          </ImageBackground>
        </View>
        <Reactions />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 350,
    marginVertical: 5,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    height: 150,
  },
  backgro: {
    height: 300,
    width: 300,
  },
  imageProfile: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
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
    width: 300,
    borderRadius: 150,
    borderColor: "white",
    borderWidth: 5,
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

export default ImageProfile;
