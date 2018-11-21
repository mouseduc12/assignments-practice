import React, { Component } from 'react';
import hero from "./hero.json";
import SuperHero from "./SuperHero"

class App extends Component{
  constructor(){
    super();
  }
  talking = (name) =>{
    const theHeroIsTalking = hero.heroes.filter((each) => each.name === name)
    const newhero = theHeroIsTalking[0]
    alert(newhero.talk)
  }
  render() {
    return (
      <div>
        {hero.heroes.map((each , id) => <SuperHero name={each.name} key ={id} src={each.src} talking={this.talking}/>)}
      </div>
    );
  }
}

export default App;
