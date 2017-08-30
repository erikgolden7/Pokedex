import React, { Component } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import Nav from "./nav.js"
import '../style/App.css';

import PokemonList from "./cards/pokemon_list";
import SearchBar from "../containers/search_bar";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
	      <div className="home-img"></div>
      </div>
    );
  }
}

export default App;

