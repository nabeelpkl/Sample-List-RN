import React from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";
import { getRandomColor } from "utils";
import StudentItem from "./List/StudentItem";
class StudentsTab extends React.Component {

  constructor(props) {
    super(props);

    /*  let students = data.dataList.map((item) => {
       item.circleColor = getRandomColor();
 
       return item;
     }); */

    this.state = {
      students: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.getStudentsData();
  }

  async getStudentsData() {
    try {
      let response = await fetch("http://www.mocky.io/v2/5c41950b0f0000543fe7b8a2");

      if (response !== null && response.status === 200) {
        const data = await response.json();
        let students = data.dataList.map((item) => {
          item.circleColor = getRandomColor();

          return item;
        });
        this.setState({ students, loading: false, error: null });
      } else {
        this.setState({ students: null, loading: false, error: "Sorry. Something went wrong" });
      }

    } catch (e) {
      console.log("Student api error", e);
      this.setState({ students: null, loading: false, error: "Sorry. Something went wrong" });
    }
  }

  render() {
    const { students, loading, error } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        {loading ? (<ActivityIndicator size="large" animating />) : students ? (
          <FlatList
            data={students}
            renderItem={({ item, index }) => <StudentItem item={item} />
            }
            keyExtractor={item => `${item.attendeeId}`}
          />
        ) :
          (
            <Text style={{ alignSelf: "center" }}>
              {error}
            </Text>
          )}
      </View>
    );
  }
}

export default StudentsTab;