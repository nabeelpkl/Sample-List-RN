import React from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";
import { inject, observer } from "mobx-react";
import EnquiryItem from "./List/EnquiryItem";
import Seperator from './List/Seperator';

class EnquiriesTab extends React.Component {

  componentDidMount() {
    const { enquiriesStore } = this.props;
    enquiriesStore.getEnquiries();
  }

  handleAddToFavourite = (index) => {
    const { enquiriesStore } = this.props;
    enquiriesStore.onFavouriteClick(index);
  };

  handleItemPress = (item, index) => {
    this.props.navigation.navigate('Details', {
      data: item,
      type: "enquiry",
      index
    });
  };

  render() {
    const { enquiriesStore } = this.props;
    const { enquiries, loading, errorMessage } = enquiriesStore;

    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        {loading ? (<ActivityIndicator size="large" animating />) : enquiries ? (
          <FlatList
            data={enquiries}
            renderItem={({ item, index }) => (
              <EnquiryItem
                item={item}
                index={index}
                onPress={() => this.handleItemPress(item, index)}
                onFavouritPress={() => this.handleAddToFavourite(index)}
              />
            )}
            keyExtractor={item => `${item.enqId}`}
            ItemSeparatorComponent={Seperator}
          />
        ) : (
            <Text style={{ alignSelf: "center" }}>
              {errorMessage}
            </Text>
          )}

      </View>
    );
  }
}

export default inject((stores, props) => {
  const { enquiriesStore } = stores;
  return { enquiriesStore };
})(observer(EnquiriesTab));