import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoComponent from "./components/TodoComponent";


class App extends Component {
  render() {
    return (
        <div className="App">
          <TodoComponent/>
        </div>
    );
  }
}

export default App;