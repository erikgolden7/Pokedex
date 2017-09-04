import React, { Component } from 'react';
import Nav from "./nav.js"
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
	      <div className="home-img"/>
      </div>
    );
  }
}

export default App;

