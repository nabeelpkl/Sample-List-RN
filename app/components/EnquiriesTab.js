import React from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";
import {
  getRandomColor,
} from "utils";
import EnquiryItem from "./List/EnquiryItem";
import Seperator from './List/Seperator';

class EnquiriesTab extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      enquiries: null,
      loading: true,
      error: null,
    }
  }
  componentDidMount() {
    this.getEnquiries();
  }

  handleAddToFavourite = (index) => {
    let enquiries = [...this.state.enquiries];
    let item = { ...enquiries[index] };
    item.isStarred = !item.isStarred;
    enquiries[index] = item;

    this.setState({ enquiries });

  };

  handleItemPress = (item) => {
    this.props.navigation.navigate('Details', {
      data: item,
      type: "enquiry",
    });
  };

  async getEnquiries() {
    try {
      let response = await fetch("http://www.mocky.io/v2/5c41920e0f0000543fe7b889");

      if (response !== null && response.status === 200) {
        const data = await response.json();
        let newEnquiries = data.dataList.map((item) => {
          item.circleColor = getRandomColor();

          return item;
        });
        this.setState({ enquiries: newEnquiries, loading: false, error: null });
      } else {
        this.setState({ enquiries: null, loading: false, error: "Sorry. Something went wrong" });
      }

    } catch (e) {
      console.log("Enquiry api error", e);
      this.setState({ enquiries: null, loading: false, error: "Something went wrong" });
    }
  }

  render() {
    const { enquiries, loading, error } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        {loading ? (<ActivityIndicator size="large" animating />) : enquiries ? (
          <FlatList
            data={enquiries}
            renderItem={({ item, index }) => (
              <EnquiryItem
                item={item}
                index={index}
                onPress={() => this.handleItemPress(item)}
                onFavouritPress={() => this.handleAddToFavourite(index)}
              />
            )}
            keyExtractor={item => `${item.enqId}`}
            ItemSeparatorComponent={Seperator}
          />
        ) : (
            <Text style={{ alignSelf: "center" }}>
              {error}
            </Text>
          )}

      </View>
    );
  }
}

export default EnquiriesTab;