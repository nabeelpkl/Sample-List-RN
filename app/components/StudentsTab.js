import React from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Platform,
  Alert,
} from "react-native";
import { getRandomColor, Screen, capitalizeFirstLetter, makePhoneCallWith } from "utils";
import moment from 'moment';
import Images from '../assets/images';

import data from "./students.json";
class StudentsTab extends React.Component {

  constructor(props) {
    super(props);

    let students = data.dataList.map((item, index, arr) => {
      item.circleColor = getRandomColor();

      return item;
    });


    this.state = {
      students
    };
  }

  renderTextRow = (data) => (
    <View style={{ marginVertical: 2 }}>
      <Text>
        {data}
      </Text>
    </View>
  );

  renderItem = (item, index) => {
    console.log("rendering...");
    const { name, category, batchName, phoneNumber, created, circleColor } = item;
    const letterCircleSize = Screen.width * .08;

    return (
      <View style={{ flex: 1, flexDirection: 'row', padding: 8 }}>

        <View >
          <View style={[{ height: letterCircleSize, width: letterCircleSize, borderRadius: letterCircleSize / 2, justifyContent: 'center', alignItems: 'center', margin: 8 }, { backgroundColor: circleColor }]}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
              {name[0].toUpperCase()}
            </Text>
          </View>
        </View>

        <View style={{ padding: 8, flex: 1 }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 2, alignItems: 'center', paddingRight: 24 }}>

            <Text style={{ fontSize: 18, fontWeight: '500' }}>
              {capitalizeFirstLetter(name.length > 18 ? `${name.slice(0, 18).trim()}...` : name.trim())}
            </Text>

            <Text style={{ fontSize: 12, color: 'grey' }}>
              {/* No Data Available from API */}
              {/* moment(postedOn, "DD/MM/YYYY").fromNow() */ "12/08/2019"}
            </Text>

          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              {this.renderTextRow(category)}

              {this.renderTextRow(batchName)}
            </View>
          </View>

        </View>
        <View style={{ justifyContent: 'space-around' }}>
          <TouchableOpacity onPress={() => console.log("Add dropdown menu")}>
            <Image resizeMode='contain' source={Images.menu} style={{ height: 16, width: 16, tintColor: 'grey' }} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => makePhoneCallWith(phoneNumber)}>
            <Image resizeMode='contain' source={Images.phoneCall} style={{ height: 16, width: 16 }} />
          </TouchableOpacity>

        </View>
      </View>
    );
  }

  render() {
    const { students } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={students}
          renderItem={({ item, index }) => this.renderItem(item, index)
          }
          keyExtractor={item => `${item.attendeeId}`}
        />
      </View>
    );
  }
}

export default StudentsTab;