import React, { Component } from "react";
import axios from "axios";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { pokemonDescription } from "../../actions/index";
import "../../style/cards.css";
import "../../style/pokedex.css";

class PokedexDetail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			prev: "",
			name: "",
			picture: "",
			picture_back: "",
			id: 0,
			type1: "",
			type2: null,
			weight: 0
		};
	}

	selectedPokemonInfo(pokemon) {
		if (this.state.prev !== pokemon.name) {
			this.setState({ prev: pokemon.name });

			axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then(result => {
				console.log(result.data);
				const { name, sprites, id, types, weight } = result.data;
				this.setState({ name: name });
				this.setState({ picture: sprites.front_default });
				if (sprites.back_default) {
					this.setState({ picture_back: sprites.back_default });
				}

				this.setState({ id: id });
				this.setState({ weight: weight });
				if (types.length === 1) {
					this.setState({ type1: types[0].type.name });
					this.setState({ type2: null });
				}
				if (types.length === 2) {
					this.setState({ type1: types[0].type.name });
					this.setState({ type2: types[1].type.name });
				}
			});
		}

		return (
			<div className="detail-box">
				<img className="img" src={this.state.picture} />
				{this.state.picture_back ? <img className="img" src={this.state.picture_back} /> : ""}
				<div> name: {this.state.name} </div>
				<div> Id: {this.state.id} </div>
				<div> Weight: {this.state.weight} </div>
				<div> Type: {this.state.type1}</div>
				{this.state.type2 ? <div> Type 2: {this.state.type2} </div> : ""}
				{/* <div> Type 1: {this.state.type2} </div> */}
				{/* <div> Type 1: {this.state.description.types[1]} </div> */}
			</div>
		);
	}

	render() {
		if (!this.props.selectedPokemon) {
			return <div className="detail-box"> Waiting for input... </div>;
		}

		return <div>{this.selectedPokemonInfo(this.props.selectedPokemon)}</div>;
	}
}

// function mapStateToProps({description}) {
// 	return {
// 		description
// 	}
// }
//
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ pokemonDescription: pokemonDescription }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PokedexDetail);
export default PokedexDetail;
