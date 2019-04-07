import React from "react";
import { StyleSheet, Text, SafeAreaView, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Screen } from "utils";
import Header from "./components/Header";
import EnquiriesTab from "./components/EnquiriesTab";
import StudentsTab from "./components/StudentsTab";

class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'enquiries', title: 'Enquiries' },
      { key: 'students', title: 'Students' },
    ],
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>

        <Header title="List of Enquiries" />

        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            enquiries: EnquiriesTab,
            students: StudentsTab,
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Screen.width }}
          renderTabBar={props =>
            <TabBar
              {...props}
              indicatorStyle={styles.tabIndicator}
              style={styles.tabBar}
              renderLabel={({ route, focused, color }) => (
                <Text style={[styles.tabTitle, { color: focused ? 'black' : 'grey', }]}>
                  {route.title}
                </Text>
              )}
            />
          }
        />

      </SafeAreaView>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  tabIndicator: { backgroundColor: '#007AFF' },
  tabBar: { backgroundColor: '#efefef' },
  tabTitle: {
    fontSize: 18
  },
});
