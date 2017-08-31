import React from 'react';
// import axios from "axios";
import PokedexListItem from './pokedex_list_item';


const PokedexList = props => {
// class PokedexList extends Component {
	// constructor(props){
	// 	super(props);
	//
	// 	this.state = {
	// 		list: [],
	// 		// selectedPokemon: null
	// 	}
	// }
	
	// componentWillMount() {
	// 	axios.get('http://pokeapi.co/api/v2/pokemon/?limit=811')
	// 	.then((result) => {
	// 		// console.log(result);
	// 		const list = result.data.results;
	// 		this.setState({list: list});
	// 		console.log(this.state.list);
	// 	})
	// }
	
	// render() {
		const pokemonList = props.pokemon.map(pokemon => {
			return (
				<PokedexListItem
					key={pokemon.name}
					pokemon={pokemon}
					onPokemonSelect={props.onPokemonSelect}
				/>
			);
		});
		
		return (
			<ul className="table">
				<tr>
					<th className="id">Id</th>
					<th className="name">Name</th>
					<th>Type 1</th>
					<th>Type 2</th>
				</tr>
				{pokemonList}
			</ul>
		);
		
	// }
	
}

export default PokedexList;
