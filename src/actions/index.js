export function selectPokemon(pokemon) {
	// selectPokemon is an ActionCreator, it needs to return an action,
	// an object with a type property.
	return {
		type: "POKEMON_SELECTED",
		payload: pokemon
	};
}
