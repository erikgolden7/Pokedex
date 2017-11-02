import React, { Component } from "react";
import Nav from "../nav.js";
import axios from "axios";
import "../../style/App.css";

import PokemonList from "./pokemon_list.js";
import SearchBar from "../search_bar";

class Cards extends Component {
	constructor(props) {
		super();

		this.state = {
			list: [],
			selectedPokemon: null
		};
	}

	componentWillMount() {
		axios.get("https://pokeapi.co/api/v2/pokemon/?limit=949").then(result => {
			console.log(result.data.results);
			this.setState({ list: result.data.results });
		});
	}

	render() {
		console.log(this.state.list);
		return (
			<div>
				<Nav />
				<div className="card-search">
					<p className="page-title">Pokemon Cards</p>
					<SearchBar
						pokemon={this.state.list}
						onPokemonSelect={selectedPokemon => this.setState({ selectedPokemon })}
					/>
					<PokemonList pokemon={this.state.list} />
				</div>
			</div>
		);
	}
}

export default Cards;
