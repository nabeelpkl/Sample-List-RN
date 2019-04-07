import React from "react";
import { View, FlatList, ActivityIndicator, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import moment from 'moment';
import { getRandomColor } from "utils";
import data from './enquiry.json';
import Images from '../assets/images';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - 75
}
const letterCircleColors = [1, 4, 9, 12, 3];

class EnquiriesTab extends React.Component {

  constructor(props) {
    super(props);

    let newEnquiries = data.dataList.map((item, index, arr) => {
      item.circleColor = getRandomColor();

      return item;
    });

    this.state = {
      enquiries: newEnquiries,
    };
  }

  componentDidMount() {

  }

  renderTextRow = (data) => (
    <View style={{ marginVertical: 2 }}>
      <Text>
        {data}
      </Text>
    </View>
  );

  handlePhoneCall = () => {
    console.log("making phone call");
  };

  handleAddToFavourite = (index) => {
    let enquiries = [...this.state.enquiries];
    let item = { ...enquiries[index] };
    item.isStarred = !item.isStarred;
    enquiries[index] = item;

    this.setState({ enquiries });

  };

  renderItem = (item, index) => {
    console.log("rendering...");
    const { name, postedOn, location, categoryName, tag, providerType, isStarred, circleColor } = item;
    const letterCircleSize = Screen.width * .08;

    return (
      <View style={{ flex: 1, flexDirection: 'row', padding: 4 }}>

        <View >
          <View style={[{ height: letterCircleSize, width: letterCircleSize, borderRadius: letterCircleSize / 2, justifyContent: 'center', alignItems: 'center', margin: 8 }, { backgroundColor: circleColor }]}>
            <Text style={{ color: 'white', fontSize: 18 }}>
              {name[0]}
            </Text>
          </View>
        </View>

        <View style={{ padding: 8, flex: 1 }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 2, alignItems: 'center', paddingRight: 24 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: '500' }}>
                {name.length > 18 ? `${name.slice(0, 18).trim()}...` : name.trim()}
              </Text>
              <Text style={{ fontSize: 14, color: 'orange', marginHorizontal: 8 }}>
                New
              </Text>
            </View>

            <Text style={{ fontSize: 12, color: 'grey' }}>
              {moment(postedOn, "DD/MM/YYYY").fromNow()}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>

              {this.renderTextRow(categoryName)}

              {this.renderTextRow(location)}

              <View style={{ flexDirection: 'row', marginVertical: 2 }}>
                <Text>
                  {providerType}
                </Text>
                <Image resizeMode='contain' source={Images.institute} style={{ marginLeft: 4, height: 16, width: 16 }} />
              </View>

              {this.renderTextRow(tag)}

            </View>

            <View style={{ justifyContent: 'space-between' }}>
              <TouchableOpacity onPress={this.handlePhoneCall}>
                <Image resizeMode='contain' source={Images.phoneCall} style={{ height: 16, width: 16 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.handleAddToFavourite(index)}>
                <Image resizeMode='contain' source={isStarred ? Images.starSelected : Images.starUnselected} style={{ height: 16, width: 16 }} />
              </TouchableOpacity>
            </View>
          </View>

        </View>

      </View>
    );
  }

  render() {
    const { enquiries } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={enquiries}
          renderItem={({ item, index }) => this.renderItem(item, index)
          }
          keyExtractor={item => `${item.enqId}`}
        />
      </View>
    );
  }
}

export default EnquiriesTab;