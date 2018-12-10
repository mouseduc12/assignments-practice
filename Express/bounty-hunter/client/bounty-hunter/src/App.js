import React from "react"
import Form from "./Form"
import BountyHunter from "./BountyHunter";
import { withState } from "./ProviderState"

class App extends React.Component {
  componentDidMount(){
    this.props.getData()
  }
    render() {
      return (
        <div>
            <Form />
            <BountyHunter />          
        </div>
      );
    }
  }
  
  export default withState(App);
  