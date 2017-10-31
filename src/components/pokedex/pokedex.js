import React, { Component } from "react";
import Nav from "../nav.js";
import "../../style/pokedex.css";
import PokedexList from "./pokedex_list";
import PokedexDetail from "./pokedex_detail";
import { pokemonList } from "../../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";

class Pokedex extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: [],
			selectedPokemon: null
		};
	}

	componentWillMount() {
		axios.get("https://pokeapi.co/api/v1/pokedex/1/").then(result => {
			const list = result.data.pokemon;
			console.log(list);
			this.setState({ list: list });
		});
	}

	render() {
		return (
			<div>
				<Nav />
				<p className="page-title">Pokedex</p>
				<div className="background">
					<PokedexList
						onPokemonSelect={selectedPokemon => this.setState({ selectedPokemon })}
						pokemon={this.state.list}
					/>
					<PokedexDetail selectedPokemon={this.state.selectedPokemon} />
				</div>
			</div>
		);
	}
}

function mapStateToProps({ list }) {
	return {
		list
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ pokemonList: pokemonList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
