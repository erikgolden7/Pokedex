import axios from "axios";


export const SELECT_POKEMON = "SELECT_POKEMON";
export const POKEMON_DESCRIPTION = "POKEMON_DESCRIPTION";

export function selectPokemon(pokemon) {
	
	const url = `http://pokeapi.co/api/v2/pokemon/${pokemon}`;
	const request = axios.get(url);
	
	console.log(request);
	
	return {
		type: SELECT_POKEMON,
		payload: request
	};
}

export function pokemonDescription(pokemon) {
	
	const url1 = `http://pokeapi.co/api/v2/pokemon-species/${pokemon}`;
	const desc = axios.get(url1);
	
	console.log(desc);
	
	return {
		type: POKEMON_DESCRIPTION,
		payload: desc
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
