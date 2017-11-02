import React, { Component } from "react";
// import { connect } from "react-redux";
// import { selectPokemon } from "../../actions/index";
// import { bindActionCreators } from "redux";
import "../../style/cards.css";

// function findElement(pokemon) {
// 	console.log(pokemon);
// 	let element = "";
// 	const name1 = pokemon.name;
// 	console.log(name1);
// 	if (pokemon.types[1] !== undefined) {
// 		if (name1 === "flying" && pokemon.types[1].type.name === "fire") {
// 			element = "card fire";
// 			return element;
// 		} else if (
// 			(name1 === "poison" && pokemon.types[1].type.name === "bug") ||
// 			(name1 === "flying" && pokemon.types[1].type.name === "bug") ||
// 			(name1 === "ground" && pokemon.types[1].type.name === "poison") ||
// 			(name1 === "grass" && pokemon.types[1].type.name === "bug") ||
// 			(name1 === "psychic" && pokemon.types[1].type.name === "grass") ||
// 			(name1 === "poison" && pokemon.types[1].type.name === "grass")
// 		) {
// 			element = "card grass";
// 			return element;
// 		} else if (
// 			(name1 === "flying" && pokemon.types[1].type.name === "normal") ||
// 			(name1 === "fairy" && pokemon.types[1].type.name === "normal")
// 		) {
// 			element = "card flying";
// 			return element;
// 		} else if (
// 			(name1 === "flying" && pokemon.types[1].type.name === "poison") ||
// 			(name1 === "poison" && pokemon.types[1].type.name === "ghost") ||
// 			(name1 === "fairy" && pokemon.types[1].type.name === "psychic")
// 		) {
// 			element = "card psychic";
// 			return element;
// 		} else if (
// 			(name1 === "poison" && pokemon.types[1].type.name === "water") ||
// 			(name1 === "psychic" && pokemon.types[1].type.name === "water") ||
// 			(name1 === "ice" && pokemon.types[1].type.name === "water") ||
// 			(name1 === "water" && pokemon.types[1].type.name === "ice") ||
// 			(name1 === "flying" && pokemon.types[1].type.name === "water") ||
// 			(name1 === "water" && pokemon.types[1].type.name === "rock")
// 		) {
// 			element = "card water";
// 			return element;
// 		} else if (
// 			(name1 === "ground" && pokemon.types[1].type.name === "rock") ||
// 			(name1 === "rock" && pokemon.types[1].type.name === "ground") ||
// 			(name1 === "bug" && pokemon.types[1].type.name === "rock") ||
// 			(name1 === "psychic" && pokemon.types[1].type.name === "rock")
// 		) {
// 			element = "card fighting";
// 			return element;
// 		} else if (name1 === "steel" && pokemon.types[1].type.name === "electric") {
// 			element = "card electric";
// 			return element;
// 		} else if (
// 			(name1 === "steel" && pokemon.types[1].type.name === "rock") ||
// 			(name1 === "rock" && pokemon.types[1].type.name === "steel")
// 		) {
// 			element = "card steel";
// 			return element;
// 		}
// 	} else if (name1 === "water") {
// 		element = "card water";
// 		return element;
// 	} else if (name1 === "electric") {
// 		element = "card electric";
// 		return element;
// 	} else if (name1 === "fire") {
// 		element = "card fire";
// 		return element;
// 	} else if (name1 === "grass" || name1 === "bug") {
// 		element = "card grass";
// 		return element;
// 	} else if (name1 === "flying" || name1 === "normal" || name1 === "dragon") {
// 		element = "card flying";
// 		return element;
// 	} else if (name1 === "fighting" || name1 === "ground") {
// 		element = "card fighting";
// 		return element;
// 	} else if (name1 === "psychic") {
// 		element = "card psychic";
// 		return element;
// 	} else if (name1 === "dark") {
// 		element = "card dark";
// 		return element;
// 	} else if (name1 === "steel") {
// 		element = "card steel";
// 		return element;
// 	} else if (name1 === "fairy") {
// 		element = "card fairy";
// 		return element;
// 	} else if (name1 === "poison") {
// 		element = "card psychic";
// 		return element;
// 	}
// }

class PokemonList extends Component {
	renderList(pokemon) {
		const uppercaseName = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
		return (
			<div key={pokemon.name}>
				<div>
					<div className="name"> {uppercaseName} </div>
					<img className="img" alt="pokemon" src={pokemon.sprites.front_default} />
					<div className="num"> #{pokemon.id} </div>
					<div className="move">
						{" "}
						{pokemon.abilities[1] ? (
							<div>
								<div>{pokemon.abilities[0].ability.name}</div>
								<br /> <div>{pokemon.abilities[1].ability.name}</div>
							</div>
						) : (
							pokemon.abilities[0].ability.name
						)}{" "}
					</div>
					<div className="type">
						{" "}
						{pokemon.types[1]
							? pokemon.types[0].type.name + "/" + pokemon.types[1].type.name
							: pokemon.types[0].type.name}{" "}
					</div>
				</div>
			</div>
		);
	}

	render() {
		return <div className="card_flex">{this.props.pokemon.map(this.renderList)}</div>;
	}
}

// function mapStateToProps({pokemon}) {
// 	return {
// 		pokemon
// 	}
// }
//
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ selectPokemon: selectPokemon }, dispatch);
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
export default PokemonList;
