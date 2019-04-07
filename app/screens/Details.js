import React from "react";
import { View } from "react-native";
import { inject, observer } from "mobx-react";
import EnquiryItem from "../components/List/EnquiryItem";
import StudentItem from "../components/List/StudentItem";

class Details extends React.Component {

  handleAddToFavourite = (index) => {
    const { enquiriesStore } = this.props;
    enquiriesStore.onFavouriteClick(index);
  };

  render() {
    const { navigation, enquiriesStore } = this.props;
    const type = navigation.getParam('type');
    const item = navigation.getParam('data');
    const index = navigation.getParam('index');

    if (type === "enquiry") {
      return (
        <View style={{ flex: 1 }}>
          <EnquiryItem
            item={enquiriesStore.enquiries[index]}
            onFavouritPress={() => this.handleAddToFavourite(index)}
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

export default inject((stores, props) => {
  const { enquiriesStore } = stores;
  return { enquiriesStore };
})(observer(Details));