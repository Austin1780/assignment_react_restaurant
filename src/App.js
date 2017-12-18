import React, { Component } from "react";
import logo from "./logo.svg";
import Nav from "./Nav";
import "./App.css";
import Menu from "./Menu";
import faker from "faker";
import Jumbo from "./Jumbo";
import Reservation from "./Reservation";
//import Map1 from "./Map1";

const navLinks = [
  {
    name: "Menu",
    link: "#Menu"
  },
  {
    name: "Reservation",
    link: "#Reservation"
  }
  // {
  //   name: "Map",
  //   link: "#map"
  // }
];

let dishes = [];

for (let i = 0; i < 10; i++) {
  let dish = {
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productAdjective(),
    image: faker.image.image()
  };
  dishes.push(dish);
}

let reservationFields = [
  {
    type: "text",
    name: "name",
    label: "Name:"
  },
  {
    type: "tel",
    name: "phone",
    label: "Phone #:"
  },
  {
    type: "date",
    name: "date",
    label: "Date:"
  },
  {
    type: "time",
    name: "time",
    label: "Time:"
  },
  {
    type: "number",
    label: "# of Guests:"
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
        <Jumbo id="Jumbo" />
        <div id="Menu">
          <h2>Our Menu</h2>
          <Menu list={dishes} />
        </div>
        <div id="Reservation">
          <h2>Make a Reservation</h2>
          <Reservation formFields={reservationFields} />
        </div>
      </div>
    );
  }
}

export default App;
