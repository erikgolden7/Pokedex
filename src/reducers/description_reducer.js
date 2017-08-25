import { POKEMON_DESCRIPTION } from "../actions/index";

export default function(state = [], action) {
	switch (action.type) {
		case POKEMON_DESCRIPTION:
			console.log(action);
			if(action.error) {
				return;
			}
			return [action.payload.data, ...state];
		default:
	}
	return state;
}
