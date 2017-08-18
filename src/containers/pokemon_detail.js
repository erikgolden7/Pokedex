import React, { Component } from "react";
import { connect } from "react-redux";

class PokemonDetail extends Component {
	render() {
		if (!this.props.pokemon) {
			return <div></div>;
		}
		
		return (
			<div>
				<h3>Details for:</h3>
				<div>Name: {this.props.pokemon.title}</div>
				<div>Element: {this.props.pokemon.element}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		pokemon: state.activeBook
	};
}

export default connect(mapStateToProps)(PokemonDetail);
