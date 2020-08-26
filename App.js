import React, { Fragment } from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";

import { Home } from "./components/View";

const App = () => {
  const data = {
    image:
      "https://concepto.de/wp-content/uploads/2014/03/modelo-e1551453273683.jpg",
    name: "Noldin Zambrano",
    likes: 100,
  };

  return (
    <Fragment>
      <View style={styles.container}>
        <Home data={data} />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    paddingTop: 30,
  },
});

export default App;
