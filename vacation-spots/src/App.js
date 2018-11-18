import React, { Component } from 'react';
import Cards from "./Cards";

let vacationSpots = [
  {
    place: "Meridian, Idaho",
    price: 40,
    timeToGo: "Spring"
  },{
    place: "Cancun",
    price: 900,
    timeToGo: "Winter"
  },{
    place: "China",
    price: 1200,
    timeToGo: "Fall"
  },{
    place: "Russia",
    price: 1100,
    timeToGo: "Summer"
  },{
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring"
  }
]

class App extends Component {

  render() {
    return (
      <div>
       {vacationSpots.map(each => <Cards place={each.place} price={each.price} timeToGo={each.timeToGo} backgroundColor/>)}
      </div>
    );
  }
}

export default App;
