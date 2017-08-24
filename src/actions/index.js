import axios from "axios";


export const SELECT_POKEMON = "SELECT_POKEMON";

export function selectPokemon(pokemon) {
	
	const url = `http://pokeapi.co/api/v2/pokemon/${pokemon}`;
	const request = axios.get(url);
	
	console.log(request);
	
	return {
		type: SELECT_POKEMON,
		payload: request
	};
}

// import axios from "axios";
//
//
// export const SELECT_POKEMON = "SELECT_POKEMON";
//
// export function selectPokemon(pokemon) {
//
// 	const url = `http://pokeapi.co/api/v2/pokemon/${pokemon}`;
// 	const request = axios.get(url);
// 	const move = request;
// 	const ability = `http://pokeapi.co/api/v2/move/${pokemon}`;
// 	const power = axios.get(ability);
//
// 	console.log(request);
// 	console.log(power);
// 	console.log(move);
//
// 	return {
// 		type: SELECT_POKEMON,
// 		payload: request
// 	};
// }
