import React from "react";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import { createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counter";

const store = createStore(combineReducers({ count: counterReducer }));

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
