
import React from "react";
import {
  View,
  Image,
  Dimensions,
  Text,
  StyleSheet,
} from "react-native";
import Images from "../assets/images";

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - 75
}

const Header = (props) => (
  <View style={styles.headerContainer}>
    <View
      style={styles.backButtonContainer}>
      {/* <Image
        source={Images.backArrow}
      /> */}
    </View>
    <View style={styles.headerMainContainer}>

    </View>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: Screen.height * 0.08,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: "center",
    backgroundColor: "green"
  },
  backButtonContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerMainContainer: {
    flex: 9.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row'
  },
  searchImageContainer: { marginHorizontal: 12 },
  notificationImageContainer: { marginHorizontal: 12, padding: 3 },
  counterContainer: {
    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: "#007AFF",
    position: 'absolute',
    top: 0,
    right: 0,
    alignItems: "center",
    justifyContent: 'center',
  },
  counterText: {
    color: 'white',
    fontSize: 11,
  }
});