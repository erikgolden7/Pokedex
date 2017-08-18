import axios from "axios";


export const SELECT_POKEMON = "SELECT_POKEMON";

export function selectPokemon(pokemon) {

	const url = `http://pokeapi.co/api/v2/pokemon/${pokemon}`;
	const request = axios.get(url);
	
	return {
		type: SELECT_POKEMON,
		payload: request
	};
}