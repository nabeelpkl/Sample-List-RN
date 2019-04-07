import React from "react";
import { Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import { Screen } from "utils";
import EnquiriesTab from "../components/EnquiriesTab";
import StudentsTab from "../components/StudentsTab";

const ListScreen = (Tab, title) => {
  const Component = props => <Tab navigation={props.navigation} />;
  Component.navigationOptions = {
    title,
    headerTitleStyle: { width: Screen.width },
  };
  return Component;
};

const Navigator = createMaterialTopTabNavigator({
  Enquiries: {
    screen: ListScreen(EnquiriesTab, "Enquiries"),
  },
  Students: {
    screen: ListScreen(StudentsTab, "Students"),
  },
},
  {
    tabBarOptions: {
      indicatorStyle: {
        backgroundColor: "#1FD59C",
      },
      style: {
        backgroundColor: "#efefef",
      },
      activeTintColor: 'black',
      inactiveTintColor: 'grey',
    },
  });

Navigator.navigationOptions = {
  title: "List of Enquiries",
  headerTitleStyle: { width: Screen.width },
};

export default Navigator;
