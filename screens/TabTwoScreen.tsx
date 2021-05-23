// screens/HomeScreen.js
import * as React from "react";
import { Provider } from "react-redux";
import store from "../lib/redux";

import InboxScreen from "./InboxScreen";

export default function TabTwoScreen() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}
