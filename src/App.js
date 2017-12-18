import React, { Component } from "react";
import logo from "./logo.svg";
import Nav from "./Nav";
import "./App.css";

const navLinks = [
  {
    name: "Reservation",
    link: "#reservation"
  },
  {
    name: "Menu",
    link: "#menu"
  },
  {
    name: "Photos",
    link: "#photos"
  },
  {
    name: "Contact",
    link: "#contact"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Spinning Plates Bistro!</h1>
        </header>
        <Nav navLinks={navLinks} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
