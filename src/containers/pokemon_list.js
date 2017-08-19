import React, { Component } from "react";
import { connect } from "react-redux";
import { selectPokemon } from "../actions/index";
import { bindActionCreators } from "redux";
import '../style/cards.css';

class PokemonList extends Component {
	
	renderList(pokemon) {
	console.log(pokemon);
		
		// const name = cityData.city.name;
		// const temps = cityData.list.map(weather => weather.main.temp);
		// const pressures = cityData.list.map(weather => weather.main.pressure);
		// const humidities = cityData.list.map(weather => weather.main.humidity);
		// const { lon, lat } = cityData.city.coord;
		const uppercaseName = pokemon.name[0].toUpperCase() + pokemon.name.substring(1)
		
		
	
	if(pokemon.types[0].type.name === "water"){
		return (
			<div key={pokemon.name} className="card water1">
				<div className="name"> {uppercaseName} </div>
				<img className="img" src={pokemon.sprites.front_default}/>
				<div className="num"> # {pokemon.id} </div>
				<div> Type: {(pokemon.types[1] !== undefined) ? pokemon.types[0].type.name + "/" + pokemon.types[1].type.name : pokemon.types[0].type.name} </div>
			</div>
		);
	}
	else if(pokemon.types[0].type.name === "poison" && pokemon.types[1].type.name === "ghost"){
		return (
			<div key={pokemon.name} className="card psychic">
				<div className="name"> {uppercaseName} </div>
				<img className="img" src={pokemon.sprites.front_default}/>
				<div className="num"> # {pokemon.id} </div>
				<div> Type: {(pokemon.types[1] !== undefined) ? pokemon.types[0].type.name + "/" + pokemon.types[1].type.name : pokemon.types[0].type.name} </div>
			</div>
		);
	}
	else if(pokemon.types[0].type.name === "flying" && pokemon.types[1].type.name === "fire"){
		return (
			<div key={pokemon.name} className="card fire1">
				<div className="name"> {uppercaseName} </div>
				<img className="img" src={pokemon.sprites.front_default}/>
				<div className="num"> # {pokemon.id} </div>
				<div> Type: {(pokemon.types[1] !== undefined) ? pokemon.types[0].type.name + "/" + pokemon.types[1].type.name : pokemon.types[0].type.name} </div>
			</div>
		);
	}
	else if(pokemon.types[0].type.name === "flying" && pokemon.types[1].type.name === "water"){
		return (
			<div key={pokemon.name} className="card water1">
				<div className="name"> {uppercaseName} </div>
				<img className="img" src={pokemon.sprites.front_default}/>
				<div className="num"> # {pokemon.id} </div>
				<div> Type: {(pokemon.types[1] !== undefined) ? pokemon.types[0].type.name + "/" + pokemon.types[1].type.name : pokemon.types[0].type.name} </div>
			</div>
		);
	}
	else if(pokemon.types[0].type.name === "electric"){
		return (
			<div key={pokemon.name} className="card electric1">
				<div className="name"> {uppercaseName} </div>
				<img className="img" src={pokemon.sprites.front_default}/>
				<div className="num"> # {pokemon.id} </div>
				<div> Type: {(pokemon.types[1] !== undefined) ? pokemon.types[0].type.name + "/" + pokemon.types[1].type.name : pokemon.types[0].type.name} </div>
			</div>
		);
	}
	else if(pokemon.types[0].type.name === "fire"){
		return (
			<div key={pokemon.name} className="card fire1">
				<div className="name"> {uppercaseName} </div>
				<img className="img" src={pokemon.sprites.front_default}/>
				<div className="num"> # {pokemon.id} </div>
				<div> Type: {(pokemon.types[1] !== undefined) ? pokemon.types[0].type.name + "/" + pokemon.types[1].type.name : pokemon.types[0].type.name} </div>
			</div>
		);
	}
	else if(pokemon.types[0].type.name === "grass" || pokemon.types[0].type.name === "bug" || pokemon.types[0].type.name === "poison"){
		return (
			<div key={pokemon.name} className="card grass1">
				<div className="name"> {uppercaseName} </div>
				<img className="img" src={pokemon.sprites.front_default}/>
				<div className="num"> # {pokemon.id} </div>
				<div> Type: {(pokemon.types[1] !== undefined) ? pokemon.types[0].type.name + "/" + pokemon.types[1].type.name : pokemon.types[0].type.name} </div>
			</div>
		);
	}
	else if(pokemon.types[0].type.name === "flying"){
		return (
			<div key={pokemon.name} className="card flying">
				<div className="name"> {uppercaseName} </div>
				<img className="img" src={pokemon.sprites.front_default}/>
				<div className="num"> # {pokemon.id} </div>
				<div> Type: {(pokemon.types[1] !== undefined) ? pokemon.types[0].type.name + "/" + pokemon.types[1].type.name : pokemon.types[0].type.name} </div>
			</div>
		);
	}
	else if(pokemon.types[0].type.name === "fighting" || pokemon.types[0].type.name === "ground"){
		return (
			<div key={pokemon.name} className="card fighting">
				<div className="name"> {uppercaseName} </div>
				<img className="img" src={pokemon.sprites.front_default}/>
				<div className="num"> # {pokemon.id} </div>
				<div> Type: {(pokemon.types[1] !== undefined) ? pokemon.types[0].type.name + "/" + pokemon.types[1].type.name : pokemon.types[0].type.name} </div>
			</div>
		);
	}
	else if(pokemon.types[0].type.name === "psychic"){
		return (
			<div key={pokemon.name} className="card psychic">
				<div className="name"> {uppercaseName} </div>
				<img className="img" src={pokemon.sprites.front_default}/>
				<div className="num"> # {pokemon.id} </div>
				<div> Type: {(pokemon.types[1] !== undefined) ? pokemon.types[0].type.name + "/" + pokemon.types[1].type.name : pokemon.types[0].type.name} </div>
			</div>
		);
	}
		return (
			<div key={pokemon.name} className="card">
				<img className="img" src={pokemon.sprites.front_default}/>
				<div> # {pokemon.id} </div>
				<div> Name: {uppercaseName} </div>
				<div> Type: {(pokemon.types[1] !== undefined) ? pokemon.types[0].type.name + "/" + pokemon.types[1].type.name : pokemon.types[0].type.name} </div>
			</div>
		);
	}

	render() {
		return (
			<div className="card_flex">
				{this.props.pokemon.map(this.renderList)}
			</div>
		);
	}
}

function mapStateToProps({pokemon}) {
	return { pokemon };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passed
	// to all of our reducers
	return bindActionCreators({ selectPokemon: selectPokemon }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
