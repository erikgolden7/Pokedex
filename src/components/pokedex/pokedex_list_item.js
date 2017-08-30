import React from 'react';
var id = 0;
const PokedexListItem = ({pokemon}) => {
	id++;
	return (
		<li>
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