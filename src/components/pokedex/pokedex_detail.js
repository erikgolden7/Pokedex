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
			toggle: false,
			name: "",
			picture: "",
			picture_back: "",
			id: 0,
			type1: "",
			type2: null,
			weight: 0,
			ability1: "",
			ability2: ""
		};
	}

	setPicture = ({ sprites }) => {
		this.setState({ picture: sprites.front_default });
		if (sprites.back_default !== null) {
			this.setState({ picture_back: sprites.back_default });
		}
		if (!sprites.back_default) {
			this.setState({ picture_back: null });
		}
	};

	setType = ({ types }) => {
		if (types.length === 1) {
			this.setState({ type1: types[0].type.name });
			this.setState({ type2: null });
		}
		if (types.length === 2) {
			this.setState({ type1: types[0].type.name });
			this.setState({ type2: types[1].type.name });
		}
	};

	setAbilities = ({ abilities }) => {
		if (abilities.length === 1) {
			this.setState({ ability1: abilities[0].ability.name });
			this.setState({ ability2: null });
		}
		if (abilities.length > 1) {
			this.setState({ ability1: abilities[0].ability.name });
			this.setState({ ability2: abilities[1].ability.name });
		}
	};

	selectedPokemonInfo(pokemon) {
		if (this.state.prev !== pokemon.name) {
			this.setState({ prev: pokemon.name });
			this.setState({ toggle: false });

			axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then(result => {
				console.log(result.data);
				const { name, sprites, id, types, weight, abilities } = result.data;
				this.setState({ name: name });
				this.setPicture({ sprites });
				this.setState({ id: id });
				this.setState({ weight: weight });
				this.setType({ types });
				this.setAbilities({ abilities });
				this.setState({ toggle: true });
			});
		}

		return (
			<div>
				{this.state.toggle ? (
					<div className="detail-box">
						<div className="img-container">
							<img className="img" alt="" src={this.state.picture} />
							{this.state.picture_back ? (
								<img className="img" alt="" src={this.state.picture_back} />
							) : (
								""
							)}
						</div>
						<div className="detail-text">
							<div> Id: {this.state.id} </div>
							<div> name: {this.state.name} </div>
							{this.state.type2 ? (
								<div>
									{" "}
									Type: {this.state.type1}/{this.state.type2}{" "}
								</div>
							) : (
								<div> Type: {this.state.type1}</div>
							)}
							<div> Weight: {this.state.weight} </div>
							<div>Ability: {this.state.ability1}</div>
							{this.state.ability2 ? <div>Ability 2: {this.state.ability2}</div> : ""}
						</div>
					</div>
				) : (
					<div className="detail-box">
						<div className="sk-circle">
							<div className="sk-circle1 sk-child" />
							<div className="sk-circle2 sk-child" />
							<div className="sk-circle3 sk-child" />
							<div className="sk-circle4 sk-child" />
							<div className="sk-circle5 sk-child" />
							<div className="sk-circle6 sk-child" />
							<div className="sk-circle7 sk-child" />
							<div className="sk-circle8 sk-child" />
							<div className="sk-circle9 sk-child" />
							<div className="sk-circle10 sk-child" />
							<div className="sk-circle11 sk-child" />
							<div className="sk-circle12 sk-child" />
						</div>
					</div>
				)}
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
