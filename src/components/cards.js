
import React, { Component } from 'react';
import logo from '../images/logo.png';
import Nav from "./nav.js"
import { Link } from 'react-router-dom';
import '../style/App.css';

import PokemonList from "../containers/pokemon_list";
import SearchBar from "../containers/search_bar";

class Cards extends Component {
	render() {
		return (
			<div>
				<Nav />
				<p>Pokemon Cards</p>
					<SearchBar />
					<PokemonList />
				</div>
		);
	}
}

export default Cards;