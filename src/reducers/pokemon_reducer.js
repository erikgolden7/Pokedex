import { SELECT_POKEMON } from "../actions/index";

export default function(state = [], action) {
	switch (action.type) {
		case SELECT_POKEMON:
			console.log(action.payload);
			if(action.error) {
				return;
			}
			
			return [action.payload.data, ...state];
		default:
	}
	return state;
}