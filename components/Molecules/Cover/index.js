import React, { Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ImageBackground,
  Alert,
  TextInput,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Reactions } from "../../Atoms";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Cover = () => {
  const image =
    "https://scontent.ftgu2-1.fna.fbcdn.net/v/t1.0-9/107826573_3163875227002248_122816155127681500_n.jpg?_nc_cat=110&_nc_sid=e3f864&_nc_ohc=4MnNgjg_VYYAX-jljS2&_nc_ht=scontent.ftgu2-1.fna&oh=dcea86fb533fa74d9a8783a6cecf00c1&oe=5F6AB58D";
  const profile =
    "https://scontent.ftgu2-1.fna.fbcdn.net/v/t1.0-9/53217004_2161075367282244_5126724628114309120_n.jpg?_nc_cat=107&_nc_sid=174925&_nc_ohc=B6Q56hirjVsAX9e7g_2&_nc_ht=scontent.ftgu2-1.fna&oh=c2c1cfe89b43e41a65f723f9422afd21&oe=5F6AB1CE";

  return (
    <Fragment>
      <View style={styles.box}>
        <View style={styles.container}>
          <ImageBackground style={styles.background} source={{ uri: image }}>
            <View style={styles.backgro}>
              <Image style={styles.image} source={{ uri: profile }}></Image>
            </View>
            <Text style={styles.text}>Noldin Zambrano</Text>
            <Text style={styles.gray}>Tranquilo,alegre y Responsable</Text>
          </ImageBackground>
        </View>
        <View style={styles.row}>
          <View style={[styles.botonSetting, styles.backgroundColor]}>
            <View style={styles.info}>
              <Entypo name="add-user" size={20} color="white" />
            </View>
            <Text style={styles.font}>Agregar a amigos</Text>
          </View>
          <View style={styles.boton}>
            <Ionicons name="md-settings" size={24} color="black" />
          </View>
          <View style={styles.boton}>
            <AntDesign name="ellipsis1" size={24} color="gray" />
          </View>
        </View>
        <View style={styles.separator}></View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  backgro: {
    height: 200,
    width: 200,
  },
  container: {
    flex: 1,
    height: 300,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    height: 150,
  },
  box: {
    backgroundColor: "white",
    flexDirection: "column",
    margin: 10,
  },
  box2: {
    backgroundColor: "white",
    flexDirection: "row",
    height: 40,
    width: 180,
    marginHorizontal: 10,
    borderRadius: 4,
  },
  box3: {
    backgroundColor: "lightgray",
    flexDirection: "row",
    height: 40,
    width: 80,
    marginHorizontal: 40,
    borderRadius: 4,
  },

  image: {
    flex: 1,
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 5,
  },
  imageProfile: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  info: {
    alignSelf: "center",
    color: "white",
  },
  font: {
    fontSize: 15,
    color: "white",
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
    color: "black",
    marginHorizontal: 10,
  },
  gray: {
    color: "gray",
  },

  backgroundColor: {
    backgroundColor: "#1e90ff",
  },
  row: {
    flexDirection: "row",
    marginHorizontal: 5,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  botonSetting: {
    flexDirection: "row",
    marginHorizontal: 6,
    backgroundColor: "lightgray",
    height: 30,
    justifyContent: "center",
    alignItems: "center",

    width: 205,
    borderRadius: 5,
  },
  boton: {
    flexDirection: "row",
    marginHorizontal: 10,
    backgroundColor: "lightgray",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    borderRadius: 5,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Cover;
