import React, { Component } from "react";
import { connect } from "react-redux";
import { selectPokemon } from "../actions/index";
import { bindActionCreators } from "redux";
import '../style/cards.css';

class PokemonList extends Component {
	renderList(pokemon) {
	console.log(pokemon);
		return (
			<div key={pokemon.name} className="card">
				<img className="img" src={pokemon.sprites.front_default}/>
				<div> # {pokemon.id} </div>
				<div> Name: {pokemon.name} </div>
				<div> Type: {pokemon.types[0].type.name} </div>
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
