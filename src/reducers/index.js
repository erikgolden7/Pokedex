
import { combineReducers } from "redux";
import PokemonReducer from "./pokemon_reducer";
import PokemonDescription from "./description_reducer";


const rootReducer = combineReducers({
	pokemon: PokemonReducer,
	description: PokemonDescription,
});

export default rootReducer;