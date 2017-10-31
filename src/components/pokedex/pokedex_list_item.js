import React from "react";

const max = 811;
let id = 0;
const PokedexListItem = ({ pokemon, onPokemonSelect }) => {
	if (id <= max) {
		id++;
	}
	// id++;
	return (
		<div className="tbl-row" onClick={() => onPokemonSelect(pokemon)}>
			<td className="tbl-id">{id}</td>
			<td className="tbl-name">{pokemon.name}</td>
		</div>
	);
};

export default PokedexListItem;
