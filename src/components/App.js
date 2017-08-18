import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../style/App.css';

import PokemonList from "../containers/pokemon_list";
import PokemonDetail from "../containers/pokemon_detail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pokedex</h2>
        </div>
        <div>
          <PokemonList />
          <PokemonDetail />
        </div>
      </div>
    );
  }
}

export default App;

