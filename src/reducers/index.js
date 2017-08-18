
import { combineReducers } from "redux";
import PokemonReducer from "./pokemon_reducer";
import ActivePokemon from "./active_card";

const rootReducer = combineReducers({
	pokemon: PokemonReducer,
	activePokemon: ActivePokemon
});

export default rootReducer;