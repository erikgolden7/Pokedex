import React, { Component } from "react";
import { connect } from "react-redux";
import { selectPokemon } from "../actions/index";
import { pokemonDescription } from "../actions/index";
import { bindActionCreators } from "redux";
import '../style/cards.css';


function findElement(pokemon){
	var element = "";
	if(pokemon.types[0].type.name === "water"){
		element = "card water1";
		return element;
	}
	else if(pokemon.types[0].type.name === "poison" && pokemon.types[1].type.name === "ghost"){
		element = 'card psychic';
		return element;
	}
	else if(pokemon.types[0].type.name === "flying" && pokemon.types[1].type.name === "fire"){
		element = 'card fire1';
		return element;
	}
	else if(pokemon.types[0].type.name === "flying" && pokemon.types[1].type.name === "water"){
		element = 'card water1';
		return element;
	}
	else if(pokemon.types[0].type.name === "electric"){
		element = 'card electric1';
		return element;
	}	else if(pokemon.types[0].type.name === "fire"){
		element = 'card fire1';
		return element;
	}
	else if(pokemon.types[0].type.name === "grass" || pokemon.types[0].type.name === "bug" || pokemon.types[0].type.name === "poison"){
		element = 'card grass1';
		return element;
	}
	else if(pokemon.types[0].type.name === "flying"){
		element = 'card flying';
		return element;
	}
	else if(pokemon.types[0].type.name === "fighting" || pokemon.types[0].type.name === "ground"){
		element = 'card fighting';
		return element;
	}
	else if(pokemon.types[0].type.name === "psychic"){
		element = 'card psychic';
		return element;
	}
}

function cardInfo(pokemon){
	const uppercaseName = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
	
	return (
		<div >
			<div className="name"> {uppercaseName} </div>
			<img className="img" alt="pokemon" src={pokemon.sprites.front_default} />
			<div className="num"> # {pokemon.id} </div>
			<div className="move"> {(pokemon.abilities[1]) ? <div><div>{pokemon.abilities[0].ability.name}</div><br/> <div>{pokemon.abilities[1].ability.name}</div></div> : pokemon.abilities[0].ability.name} </div>
			<div className="type"> {(pokemon.types[1]) ? pokemon.types[0].type.name + "/" + pokemon.types[1].type.name : pokemon.types[0].type.name} </div>
			<div className="colorless_icon"></div>
		</div>
	)
}


class PokemonList extends Component {
	
	renderList(pokemon) {
		return (
			<div className={findElement(pokemon)}>
				{cardInfo(pokemon)}
			</div>
		)
	}
	
	
	render() {
		return (
			<div className="card_flex" >
				{this.props.pokemon.map(this.renderList)}

			</div>
		);
	}
}

function mapStateToProps({pokemon, description}) {
	return {
		pokemon,
		description
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectPokemon: selectPokemon, pokemonDescription: pokemonDescription }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
