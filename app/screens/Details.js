import React from "react";
import { View, Text } from "react-native";
import EnquiryItem from "../components/List/EnquiryItem";
import StudentItem from "../components/List/StudentItem";

class Details extends React.Component {
  render() {
    const { navigation } = this.props;
    const type = navigation.getParam('type');
    const item = navigation.getParam('data');
    console.log("details: ", type, item);

    if (type === "enquiry") {
      return (
        <View style={{ flex: 1 }}>
          <EnquiryItem
            item={item}
          />
        </View>
      );
    } else if (type === "student") {
      return (
        <View style={{ flex: 1 }}>
          <StudentItem
            item={item}
          />
        </View>
      );
    }
  }
}

export default Details;