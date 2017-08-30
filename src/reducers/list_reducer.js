import { POKEMON_LIST } from "../actions/index";

export default function(state = [], action) {
	switch (action.type) {
		case POKEMON_LIST:
			console.log(action.payload);
			if(action.error) {
				return;
			}
			
			return [action.payload.data, ...state];
		default:
	}
	return state;
}

