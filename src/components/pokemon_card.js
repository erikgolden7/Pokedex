// import React, { Component } from "react";
// import '../style/cards.css';
//
//
// export default class PokemonCard extends Component {
//
// 	render() {
// 		const uppercaseName = this.props.pokemon.name[0].toUpperCase() + this.props.pokemon.name.substring(1);
//
// 		return (
// 			<div key={this.props.pokemon.name} className="card water1">
// 				<div className="name"> {this.props.pokemon.name[0]} </div>
// 				<img className="img" src={this.props.pokemon.sprites.front_default}/>
// 				<div className="num"> # {this.props.pokemon.id} </div>
// 				<div> Type: {(this.props.pokemon.types[1] !== undefined) ? this.props.pokemon.types[0].type.name + "/" + this.props.pokemon.types[1].type.name : this.props.pokemon.types[0].type.name} </div>
// 			</div>
// 		);
// 	};
// }
