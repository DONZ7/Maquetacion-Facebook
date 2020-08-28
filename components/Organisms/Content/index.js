import React, { Fragment } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  Information,
  Friends,
  Publications,
  Profile,
  Cover,
  ImageProfile,
} from "../../Molecules";

const Content = () => {
  return (
    <Fragment>
      <ScrollView>
        <Cover />
        <Information />
        <Friends />
        <Publications />
        <Profile />
        <ImageProfile />
      </ScrollView>
    </Fragment>
  );
};

export default Content;
