import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="topnav">
          <a href="#contact">Contact</a>
          <a href="#music">Music</a>
          <a href="#coding">Coding</a>
          <a href="#news">About Me</a>
          <a className="active" href="#home">Home</a>             
      </div>
      </div>
    );
  }
}

export default App;
