import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import NavBar from "./components/navbar";
import store from "./store";
import {loadUser} from './actions/authAction';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }
  render() {
    return (
      <Provider store={store}>
        <NavBar />        
      </Provider>
    );
  }
}

export default App;
