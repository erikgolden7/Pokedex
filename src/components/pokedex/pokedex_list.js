import React from "react";
// import axios from "axios";
import PokedexListItem from "./pokedex_list_item";

const PokedexList = props => {
	const pokemonList = props.pokemon.map((pokemon, i) => {
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
			<div className="id-header">Id</div>
			<div className="name-header">Name</div>
			<div className="table">{pokemonList}</div>
		</div>
	);
};

export default PokedexList;
