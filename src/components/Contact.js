import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';



class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="topnav">
          <Link to="/contact">Contact</Link>
          <Link to="/music">Music</Link>
          <Link to="/coding">Coding</Link>
          <Link to="/aboutMe">About Me</Link>  
          <Link to="/home">Home</Link>  
        </div>
        <div className="main">
          <p>Contact</p>
        </div>
      </div>
    );
  }
}

export default Contact;
