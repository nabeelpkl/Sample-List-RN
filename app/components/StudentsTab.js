import React from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";
import { getRandomColor } from "utils";
import { inject, observer } from "mobx-react";
import StudentItem from "./List/StudentItem";
import Seperator from './List/Seperator';
class StudentsTab extends React.Component {

  componentDidMount() {
    const { studentsStore } = this.props;
    studentsStore.getStudentsData();
  }

  handleItemPress = (item,index) => {
    this.props.navigation.navigate('Details', {
      data: item,
      type: "student",
      index,
    });
  };

  render() {
    const { studentsStore } = this.props;
    const { students, loading, errorMessage } = studentsStore;
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        {loading ? (<ActivityIndicator size="large" animating />) : students ? (
          <FlatList
            data={students}
            renderItem={({ item, index }) => (
              <StudentItem
                item={item}
                onPress={() => this.handleItemPress(item, index)}
              />
            )
            }
            keyExtractor={item => `${item.attendeeId}`}
            ItemSeparatorComponent={Seperator}
          />
        ) :
          (
            <Text style={{ alignSelf: "center" }}>
              {errorMessage}
            </Text>
          )}
      </View>
    );
  }
}

export default inject((stores, props) => {
  const { studentsStore } = stores;
  return { studentsStore };
})(observer(StudentsTab));