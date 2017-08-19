import React, { Component } from "react";


class PokeCard extends Component {
	render() {
		
		return (
			<div key={pokemon.name} className="card">
				<img className="img" src={pokemon.sprites.front_default}/>
				<div> # {pokemon.id} </div>
				<div> Name: {pokemon.name} </div>
				<div> Type: {pokemon.types[0].type.name} </div>
			</div>
		);
	};
};

export default PokeCard;