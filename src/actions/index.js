import axios from "axios";

export const SELECT_POKEMON = "SELECT_POKEMON";
export const POKEMON_DESCRIPTION = "POKEMON_DESCRIPTION";
export const POKEMON_LIST = "POKEMON_LIST";

export function selectPokemon(pokemon) {
	const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
	const request = axios.get(url);

	console.log(request);

	return {
		type: SELECT_POKEMON,
		payload: request
	};
}

export function pokemonDescription(pokemonUrl) {
	const desc = axios.get(pokemonUrl);

	console.log(desc);

	return {
		type: POKEMON_DESCRIPTION,
		payload: desc
	};
}

export function pokemonList() {
	const list = axios.get("https://pokeapi.co/api/v2/pokemon/?limit=811");

	console.log(list);

	return {
		type: POKEMON_LIST,
		payload: list
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
