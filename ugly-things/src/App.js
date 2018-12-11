import React, { Component } from 'react';
import Form from "./Form"
import Display from "./Display"
import { withData } from "./ProviderAxios"

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Form />
        {this.props.data && this.props.data.map(each => <Display 
        title={each.title} 
        imgUrl={each.imgUrl} 
        description={each.description} 
        key = {each._id} 
        id = {each._id}
        handleDelete = {this.props.handleDelete}
        handleEdit = {this.props.handleEdit} />
        )}
      </div>
    );
  }
}

export default withData(App);
