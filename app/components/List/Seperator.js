import React from "react";
import { View, StyleSheet } from "react-native";
const Seperator = () => <View style={styles.seperator} />;

export default Seperator;

const styles = StyleSheet.create({
  seperator: {
    backgroundColor: '#d6d4d4',
    flex: 1,
    height: StyleSheet.hairlineWidth
  },
})