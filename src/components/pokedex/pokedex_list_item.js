import React from "react";

const PokedexListItem = ({ pokemon, onPokemonSelect, id }) => {
	var inc = id + 1;
	return (
		<div className="tbl-row" onClick={() => onPokemonSelect(pokemon)}>
			<td className="tbl-id">{inc}</td>
			<td className="tbl-name">{pokemon.name}</td>
		</div>
	);
};

export default PokedexListItem;
