import React from 'react';

var id = 0;
const PokedexListItem = ({pokemon, onPokemonSelect}) => {
	id++;
	return (
		<li onClick={() => onPokemonSelect(pokemon)}>
			<tr>
				<td className="id">{id}</td>
				<td className="name">{pokemon.name}</td>
				<td>None</td>
				<td>None</td>
			</tr>
		</li>
	);
	
};

export default PokedexListItem;