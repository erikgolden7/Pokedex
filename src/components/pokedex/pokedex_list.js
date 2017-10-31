import React from "react";
// import axios from "axios";
import PokedexListItem from "./pokedex_list_item";

const PokedexList = props => {
	// class PokedexList extends Component {
	// constructor(props){
	// 	super(props);
	//
	// 	this.state = {
	// 		list: [],
	// 		// selectedPokemon: null
	// 	}
	// }

	console.log(props.pokemon);

	// render() {
	const pokemonList = props.pokemon.map(pokemon => {
		return (
			<PokedexListItem
				key={pokemon.name}
				pokemon={pokemon}
				onPokemonSelect={props.onPokemonSelect}
			/>
		);
	});

	return (
		<tr className="table">
			<th className="id">Id</th>
			<th className="name">Name</th>
			<th>Type 1</th>
			<th>Type 2</th>
			{pokemonList}
		</tr>
	);

	// }
};

export default PokedexList;
