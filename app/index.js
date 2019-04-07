import React from "react";
import { Provider } from "mobx-react";
import AppNavigator from "./config/routes";
import stores from "./stores"

class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
