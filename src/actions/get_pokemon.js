import axios from "axios";



export const GET_POKEMON = "GET_POKEMON";

export function getPokemon(city) {
	const url = `http://pokeapi.co/api/v2/pokemon/${id}`;
	const request = axios.get(url);
	
	return {
		type: GET_POKEMON,
		payload: request
	};
}
