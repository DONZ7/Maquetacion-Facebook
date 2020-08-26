import React, { Fragment } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Information, Friends, Publications, Profile } from "../../Molecules";

const Content = () => {
  return (
    <Fragment>
      <ScrollView>
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
