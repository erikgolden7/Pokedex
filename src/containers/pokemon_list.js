import React, { Component } from "react";
import { connect } from "react-redux";
import { selectPokemon } from "../actions/index";
import { bindActionCreators } from "redux";

class PokemonList extends Component {
	renderList(pokemon) {
		return (
			<li
			key={pokemon.name}
			>
				{pokemon.name}
			</li>
		);
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.props.pokemon.map(this.renderList)}
			</ul>
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
