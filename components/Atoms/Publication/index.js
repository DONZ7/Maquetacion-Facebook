import React, { Fragment } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const Publication = () => {
  const image =
    "https://scontent.ftgu2-1.fna.fbcdn.net/v/t1.0-9/17190942_1329214727134983_7085383179581901830_n.jpg?_nc_cat=103&_nc_sid=a9b1d2&_nc_ohc=__3Ff16XrwMAX9knCl6&_nc_ht=scontent.ftgu2-1.fna&oh=fcb19a40a55398fbd53159af8fe60912&oe=5F6F9612";
  const profile =
    "https://scontent.ftgu2-1.fna.fbcdn.net/v/t1.0-9/53217004_2161075367282244_5126724628114309120_n.jpg?_nc_cat=107&_nc_sid=174925&_nc_ohc=B6Q56hirjVsAX9e7g_2&_nc_ht=scontent.ftgu2-1.fna&oh=c2c1cfe89b43e41a65f723f9422afd21&oe=5F6AB1CE";

  /*
    <ImageBackground
    style={styles.background}
    source={{ uri: image }}
  ></ImageBackground>*/
  return (
    <Fragment>
      <View style={styles.box}>
        <ImageBackground style={styles.background} source={{ uri: image }}>
          <Text style={styles.info}>Fotos</Text>
        </ImageBackground>
      </View>
    </Fragment>
  );
};

export default Publication;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fffafa",
  },

  box: {
    backgroundColor: "#00ced1",
    flexDirection: "column",
    marginTop: 20,
    width: 120,
    marginLeft: 10,

    borderRadius: 10,
  },
  image: {
    width: 102,
    height: 102,
    borderRadius: 5,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    height: 130,
    borderRadius: 10,
  },
  info: {
    flexDirection: "column",
    alignItems: "flex-start",
    margin: 10,
    color: "white",
  },
  name: {
    fontSize: 20,
  },
  row: {
    flexDirection: "row",
    marginHorizontal: 60,
    marginTop: 10,
    justifyContent: "space-between",
  },
  gray: {
    color: "gray",
  },
});
