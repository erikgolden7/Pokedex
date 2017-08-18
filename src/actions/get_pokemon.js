import axios from "axios";


export const GET_POKEMON = "GET_POKEMON";

export function getPokemon(id) {
	const url = `http://pokeapi.co/api/v2/pokemon/${id}`;
	const request = axios.get(url);
	
	return {
		type: GET_POKEMON,
		payload: request
	};
}
