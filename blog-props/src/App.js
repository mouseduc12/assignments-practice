import React, { Component } from 'react';
import Header from "./Components/Header";
import BlogPost from "./Components/BlogPost"
import Footer from "./Components/Footer"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee);

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BlogPost />
        <Footer />
      </div>
    );
  }
}

export default App;
