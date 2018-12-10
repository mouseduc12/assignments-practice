import React from 'react';
import axios from "axios"
import { withState } from "./ProviderState"
import Bounties from "./Bounties"

class BountyHunter extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map(each =>
          <Bounties
            {...each}
            handleEditRequest = {this.props.handleEditRequest}
            deleteData={this.props.deleteData} />)}
      </div>
    )
  }
}
export default withState(BountyHunter)