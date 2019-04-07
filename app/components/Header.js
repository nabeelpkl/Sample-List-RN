import React from "react";
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
} from "react-native";
import { Screen } from "utils";

const Header = (props) => {
  const { title } = props;
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerMainContainer}>
        <Text style={styles.titleStyle}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: Screen.height * 0.07,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: "center",
    backgroundColor: "green"
  },
  headerMainContainer: {
    paddingHorizontal: 16,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  titleStyle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});