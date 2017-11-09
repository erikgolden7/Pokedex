import React from "react";

const PokedexListItem = ({ pokemon, onPokemonSelect, id }) => {
	var inc = id + 1;
	const uppercaseName = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
	return (
		<div className="tbl-row" onClick={() => onPokemonSelect(pokemon)}>
			<td className="tbl-id">{inc}</td>
			<td className="tbl-name">{uppercaseName}</td>
		</div>
	);
};

export default PokedexListItem;
