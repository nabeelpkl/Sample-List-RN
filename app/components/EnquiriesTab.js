import React from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import {
  getRandomColor,
} from "utils";
import data from './enquiry.json';
import EnquiryItem from "./List/EnquiryItem";
class EnquiriesTab extends React.Component {

  constructor(props) {
    super(props);

    let newEnquiries = data.dataList.map((item) => {
      item.circleColor = getRandomColor();

      return item;
    });

    this.state = {
      enquiries: newEnquiries,
    };
  }

  componentDidMount() {

  }

  handleAddToFavourite = (index) => {
    let enquiries = [...this.state.enquiries];
    let item = { ...enquiries[index] };
    item.isStarred = !item.isStarred;
    enquiries[index] = item;

    this.setState({ enquiries });

  };

  render() {
    const { enquiries } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={enquiries}
          renderItem={({ item, index }) => (
            <EnquiryItem
              item={item}
              index={index}
              onFavouritPress={() => this.handleAddToFavourite(index)}
            />
          )}
          keyExtractor={item => `${item.enqId}`}
        />
      </View>
    );
  }
}

export default EnquiriesTab;