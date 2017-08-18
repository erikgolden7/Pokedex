// // State argument is not application state, only the state
// // this reducer is responsible for
// import { SELECT_POKEMON } from "../actions/index";
//
// export default function(state = [], action) {
// 	switch (action.type) {
// 		case "SELECT_POKEMON":
// 			return [action.payload.data, ...state];
// 	}
//
// 	return state;
// }
