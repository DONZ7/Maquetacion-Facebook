import React, { Fragment } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  Information,
  Friends,
  Publications,
  Profile,
  Cover,
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
        <Profile />
        <Profile />
      </ScrollView>
    </Fragment>
  );
};

export default Content;
