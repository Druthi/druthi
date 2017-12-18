import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="topnav">
          <Link to="/home">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/music">Music</Link>
          <Link to="/coding">Coding</Link>
          <Link to="/aboutMe">About Me</Link>           
      </div>
      </div>
    );
  }
}

export default App;
