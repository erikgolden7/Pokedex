import React, { Component } from "react";
import { connect } from "react-redux";
import { selectPokemon } from "../../actions/index";
import { pokemonDescription } from "../../actions/index";
import { bindActionCreators } from "redux";
import '../../style/cards.css';






function findElement(pokemon){
	let element = "";
	const name1 = pokemon.types[0].type.name;
	// const name2 = pokemon.types[1].type.name;
	// if(pokemon.types[1].type.name){
		console.log(name1);
		if(pokemon.types[1] !== undefined) {
			if (name1 === "poison" && pokemon.types[1].type.name === "ghost") {
				element = 'card psychic';
				return element;
			}
			else if (name1 === "flying" && pokemon.types[1].type.name === "fire") {
				element = 'card fire';
				return element;
			}
			else if (name1 === "flying" && pokemon.types[1].type.name === "water") {
				element = 'card water';
				return element;
			}
			else if (name1 === "poison" && pokemon.types[1].type.name === "grass") {
				element = 'card grass';
				return element;
			}
			else if (name1 === "poison" && pokemon.types[1].type.name === "bug") {
				element = 'card grass';
				return element;
			}
			else if (name1 === "flying" && pokemon.types[1].type.name === "bug") {
				element = 'card grass';
				return element;
			}
			else if (name1 === "flying" && pokemon.types[1].type.name === "normal") {
				element = 'card flying';
				return element;
			}
			else if (name1 === "ground" && pokemon.types[1].type.name === "poison") {
				element = 'card grass';
				return element;
			}
			else if (name1 === "fairy" && pokemon.types[1].type.name === "normal") {
				element = 'card flying';
				return element;
			}
			else if (name1 === "flying" && pokemon.types[1].type.name === "poison") {
				element = 'card psychic';
				return element;
			}
			else if (name1 === "grass" && pokemon.types[1].type.name === "bug") {
				element = 'card grass';
				return element;
			}
			else if (name1 === "poison" && pokemon.types[1].type.name === "water") {
				element = 'card water';
				return element;
			}
			else if (name1 === "psychic" && pokemon.types[1].type.name === "water") {
				element = 'card water';
				return element;
			}
			else if (name1 === "psychic" && pokemon.types[1].type.name === "grass") {
				element = 'card grass';
				return element;
			}
			else if (name1 === "ice" && pokemon.types[1].type.name === "water") {
				element = 'card water';
				return element;
			}
			else if (name1 === "ground" && pokemon.types[1].type.name === "rock") {
				element = 'card fighting';
				return element;
			}
			else if (name1 === "rock" && pokemon.types[1].type.name === "ground") {
					element = 'card fighting';
					return element;
			}
			else if (name1 === "steel" && pokemon.types[1].type.name === "electric") {
				element = 'card electric';
				return element;
			}
		}
		else if(name1 === "water"){
			element = "card water";
			return element;
		}
		else if(name1 === "electric"){
			element = 'card electric';
			return element;
		}
		else if(name1 === "fire"){
			element = 'card fire';
			return element;
		}
		else if(name1 === "grass" || name1 === "bug"){
			element = 'card grass';
			return element;
		}
		else if(name1 === "flying" || name1 === "normal" || name1 === "dragon"){
			element = 'card flying';
			return element;
		}
		else if(name1 === "fighting" || name1 === "ground"){
			element = 'card fighting';
			return element;
		}
		else if(name1 === "psychic"){
			element = 'card psychic';
			return element;
		}
		else if(name1 === "dark"){
			element = 'card dark';
			return element;
		}
		else if(name1 === "steel"){
			element = 'card steel';
			return element;
		}
		else if(name1 === "fairy"){
			element = 'card fairy';
			return element;
		}
		else if(name1 === "poison"){
			element = 'card psychic';
			return element;
		}
	// }

}


class PokemonList extends Component {
	
	renderList(pokemon) {
		const uppercaseName = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
		return (
			<div className={findElement(pokemon)}>
				<div >
					<div className="name"> {uppercaseName} </div>
					<img className="img" alt="pokemon" src={pokemon.sprites.front_default} />
					<div className="num"> #{pokemon.id} </div>
					<div className="move"> {(pokemon.abilities[1]) ? <div><div>{pokemon.abilities[0].ability.name}</div><br/> <div>{pokemon.abilities[1].ability.name}</div></div> : pokemon.abilities[0].ability.name} </div>
					<div className="type"> {(pokemon.types[1]) ? pokemon.types[0].type.name + "/" + pokemon.types[1].type.name : pokemon.types[0].type.name} </div>
				</div>
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
