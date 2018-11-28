import React, { Component } from 'react';
import HitList from "./HitList"
import axios from "axios"

class App extends Component {
  constructor(){
    super()
    this.state = {
      hitList:[]
    }
  }
  componentDidMount(){
    axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json").then(res =>{
      const hitList = res.data
      this.setState({
        hitList
      })
    })
  }
  render() {
    return (
      <div className ="flex">
        {this.state.hitList.map(each => <HitList name = {each.name} image ={each.image}/>)}
      </div>
    );
  }
}

export default App;
