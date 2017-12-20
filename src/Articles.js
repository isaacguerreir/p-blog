import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './mainpage.css';

export default class Articles extends Component {

  render() {
    return (
        <ul className="articles">
          <li><time className="date">Dec 15 2017</time> <a className="article"><Link to="/when-i-started">When I started...</Link></a></li>
          <li><time className="date">Dec 20 2017</time> <a className="article"><Link to="/under-the-hood-javascript-runned">Under the hood: Javascript Runned</Link></a></li>
        </ul>
    );
  }
}