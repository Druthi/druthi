import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';



class Music extends Component {
  render() {
    return (
      <div className="Music">
       <div className="topnav">
       <Link to="/contact">Contact</Link>
       <Link to="/music">Music</Link>
       <Link to="/coding">Coding</Link>
       <Link to="/aboutMe">About Me</Link>  
       <Link to="/home">Home</Link>  
      </div>
      <p>Music</p>
      </div>
    );
  }
}

export default Music;
