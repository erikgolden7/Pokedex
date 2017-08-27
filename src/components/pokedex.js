
import React, { Component } from 'react';
import Nav from "./nav.js"
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import '../style/pokedex.css';

import PokemonList from "../containers/pokemon_list";
import SearchBar from "../containers/search_bar";

class Pokedex extends Component {
	render() {
		return (
			<div>
				<Nav/>
				<p>Pokedex</p>
				<div  className="pokedex">
				
				</div>
			</div>
		);
	}
}

export default Pokedex;
