
import React, { Component } from 'react';
import Nav from "../nav.js"
import '../../style/App.css';

import PokemonList from "../../containers/pokemon_list.js";
import SearchBar from "../../containers/search_bar";

class Cards extends Component {
	render() {
		return (
			<div>
				<Nav />
				<div className="card-search">
					<p className="page-title">Pokemon Cards</p>
					<SearchBar />
					<PokemonList />
				</div>
			</div>
		);
	}
}

export default Cards;