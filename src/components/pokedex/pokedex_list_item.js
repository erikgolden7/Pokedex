import React from 'react';


const max = 811;
let id = 0;
const PokedexListItem = ({pokemon, onPokemonSelect}) => {
	
	if(id <= max){
		id++
	}
	// id++;
	return (
		<tr onClick={() => onPokemonSelect(pokemon)}>
			<td className="id">{id}</td>
			<td className="name">{pokemon.name}</td>
			<td>None</td>
			<td>None</td>
		</tr>
	);
	
};

export default PokedexListItem;