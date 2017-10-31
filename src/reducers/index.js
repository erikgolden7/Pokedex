import { combineReducers } from "redux";
import PokemonReducer from "./pokemon_reducer";
import PokemonDescription from "./description_reducer";
import PokemonList from "./list_reducer";


const rootReducer = combineReducers({
	pokemon: PokemonReducer,
	description: PokemonDescription,
	list: PokemonList
});

export default rootReducer;