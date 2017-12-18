import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './Nav';
import './App.css';
import Menu from './Menu';
import faker from 'faker';
import Jumbo from './Jumbo';

const navLinks = [
  {
    name: 'Reservation',
    link: '#Reservation'
  },
  {
    name: 'Menu',
    link: '#Menu'
  },
  {
    name: 'Photos',
    link: '#Photos'
  },
  {
    name: 'Contact',
    link: '#Contact'
  }
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
console.log(dishes);
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Spinning Plates Bistro!</h1>
        </header>
        <Nav navLinks={navLinks} />
        {/* <p className="App-intro" /> */}
        <Jumbo id="Jumbo" />
        <div id="Menu">
          <h2>Our Menu</h2>
          <Menu list={dishes} />
        </div>
      </div>
    );
  }
}

export default App;
