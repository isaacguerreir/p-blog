import React, { Component } from 'react';
import '../styles/navigator.css';
import img from '../isaac.jpg'

export default class Navigator extends Component {
  render() {
    return (
      <div className="nav">
        <a href="/"><img className="img" src={img} alt="Mountain View" /></a>
        <div className="description">Hi! I'm Isaac Guerreiro and I'm Front-end Engineer in KaiOS Brazil team. You can talk to me <a href="https://twitter.com/isaacguerreir_o">here</a>, and know what I have already done <a href="https://www.linkedin.com/in/isaac-guerreiro-400752103">here</a>.</div>
      </div>
    );
  }
}