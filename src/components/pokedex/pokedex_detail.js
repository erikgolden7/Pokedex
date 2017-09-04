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
			active: false
		}
	}
	
	// componentWillMount() {
	// 	axios.get('http://pokeapi.co/api/v2/pokemon/?limit=811')
	// 	.then((result) => {
	// 		// console.log(result);
	// 		const list = result.data.results;
	// 		this.setState({list: list});
	// 		console.log(this.state.list);
	// 		console.log(this.state.selectedPokemon);
	// 	})
	// }
	
	selectedPokemonInfo(pokemon) {
		// if(!this.props.description) {
		this.setState({active:true});
			this.props.pokemonDescription(pokemon.url);
		// }
		return (
			<div className="detail-box">
				<div>
					name
					{this.props.description.name}
				</div>
			</div>
		);
	}
	
	
	
	render() {
		
		if(!this.props.pokemon){
			return <div className="detail-box"> Waiting for input... </div>
		}
		
		console.log(this.props.pokemon);

		var pokemon = this.props.pokemon;
		
		if(this.state.active === true){
			console.log(this.props.description.sprites);
			return (
				<div className="detail-box">
					<div>
						<img className="img" alt="picture" src={this.props.description.sprites} />
						<div> name: {this.props.description.name} </div>
						<div> Id: {this.props.description.id} </div>
					</div>
				</div>
			)
		}
		
		return(
			<div>
				{this.selectedPokemonInfo(pokemon)}
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






// import React from "react";
//
//
// const PokedexDetail = ({ pokemon }) => {
// 	if (!pokemon) {
// 		return <div className="detail-box">Waiting for input...</div>;
// 	}
//
// 	// const url = pokemon.url;
// 	// console.log(url);
//
// 	return (
// 		<div className="detail-box">
// 			{pokemon.name}
// 		</div>
// 	);
// };
//
// export default PokedexDetail;