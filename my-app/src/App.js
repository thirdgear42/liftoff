import React, { Component } from 'react';
import './App.css';
import Nav from './nav';
import Header from './header';
import Pricing from './pricing';
import DateTime from './datetime';
import LocationList from './location';
import Footer from './footer';


class App extends Component {
  state = {
    locations: [
      {place : 'Central Perk', open : '09:00 AM', close : '10:00 PM', id:1},
      {place : 'Empire State Building', open : '09:00 AM', close : '10:00 PM', id:2},
      {place : 'Times Square', open : '10:00 AM', close : '09:00 PM', id:3},
      {place : 'Brooklyn Bridge', open : '11:00 AM', close : '06:00 PM', id:4},
      {place : 'High Line', open : '10:00 AM', close : '10:00 PM', id:5},
      {place : 'Rockefeller Center', open : '09:00 AM', close : '08:00 PM', id:6}
    ]
  }
  render() {
    return (
      <div>
<Nav />
<Header data={this.state.data} />
<Pricing />
<DateTime />
<LocationList locations={this.state.locations} />
<Footer />
      </div>
    );
  }
}

export default App;
