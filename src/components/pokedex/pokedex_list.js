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

	// console.log(props.pokemon);

	// render() {

	const pokemonList = props.pokemon.map((pokemon, i) => {
		// console.log(i);
		return (
			<PokedexListItem
				key={pokemon.name}
				pokemon={pokemon}
				id={i}
				onPokemonSelect={props.onPokemonSelect}
			/>
		);
	});

	return (
		<div className="table-header">
			<th className="id-header">Id</th>
			<th className="name-header">Name</th>
			<div className="table">{pokemonList}</div>
		</div>
	);

	// }
};

export default PokedexList;
