import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <Text>
          Urban Pro
        </Text>
      </SafeAreaView>
    )
  }
}

export default App;