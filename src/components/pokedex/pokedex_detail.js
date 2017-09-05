import React, {Component} from "react";
// import axios from 'axios';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { pokemonDescription } from "../../actions/index";
import '../../style/cards.css';
import '../../style/pokedex.css';

class PokedexDetail extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			prev: "",
		}
	}
	
	
	selectedPokemonInfo(pokemon) {
		if(this.state.prev !== pokemon.name) {
			this.setState({prev: pokemon.name});
			this.props.pokemonDescription(pokemon.url);
		}
		
		return (
			<div className="detail-box">
				{/*<img className="img" alt="pokemon pic" src={this.props.description.sprites.front_default} />*/}
				<div> name: {this.props.description.name} </div>
				<div> Id: {this.props.description.id} </div>
				<div> Type 1: {this.state.type2} </div>
				{/*<div> Type 1: {this.props.description.types[1]} </div>*/}
			</div>
		);
	}
	
	
	render() {
		if(!this.props.selectedPokemon){
			return <div className="detail-box"> Waiting for input... </div>
		}
		
		return(
			<div>
				{this.selectedPokemonInfo(this.props.selectedPokemon)}
			</div>
		)
	};
}

function mapStateToProps({description}) {
	return {
		description
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ pokemonDescription: pokemonDescription }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PokedexDetail);
