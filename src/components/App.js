import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../style/App.css';

import PokemonList from "../containers/pokemon_list";
import SearchBar from "../containers/search_bar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pokemon Cards</h2>
        </div>
        <div>
          <SearchBar />
          <PokemonList />
        </div>
      </div>
    );
  }
}

export default App;

