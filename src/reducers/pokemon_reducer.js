// this reducer is responsible for
import { SELECT_POKEMON } from "../actions/index";

export default function(state = [], action) {
	switch (action.type) {
		case "SELECT_POKEMON":
			console.log(action);
			if(action.error) {
				return;
			}
			return [action.payload.data, ...state];
	}
	
	return state;
}
