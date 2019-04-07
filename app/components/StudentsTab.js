import React from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { getRandomColor } from "utils";
import StudentItem from "./List/StudentItem";
import data from "./students.json";
class StudentsTab extends React.Component {

  constructor(props) {
    super(props);

    let students = data.dataList.map((item) => {
      item.circleColor = getRandomColor();

      return item;
    });

    this.state = {
      students
    };
  }

  render() {
    const { students } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={students}
          renderItem={({ item, index }) => <StudentItem item={item} />
          }
          keyExtractor={item => `${item.attendeeId}`}
        />
      </View>
    );
  }
}

export default StudentsTab;