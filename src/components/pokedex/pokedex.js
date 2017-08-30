
import React, { Component } from 'react';
import Nav from "../nav.js"
import '../../style/pokedex.css';
import PokedexList from './pokedex_list';
import { pokemonList } from "../../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


class Pokedex extends Component {
	render() {
		return (
			<div>
				<Nav/>
				<p className="page-title">Pokedex</p>
				<div className="background">
				 <div>
					 <PokedexList/>
				 </div>
				</div>
			</div>
		);
	}
}


function mapStateToProps({list}) {
	return {
		list
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ pokemonList: pokemonList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
