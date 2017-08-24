// import '../style/cards.css';
//
//
// function cardInfo(pokemon) {
// 	const uppercaseName = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
// 	return (
// 		<div >
// 			<div className="name"> {uppercaseName} </div>
// 			<img className="img" alt="pokemon" src={pokemon.sprites.front_default}/>
// 			<div className="num"> # {pokemon.id} </div>
// 			<div className="move1">{pokemon.abilities[0].ability.name}</div>
// 			<div
// 				className="move2"> {(pokemon.abilities[1].ability.name) ? pokemon.abilities[0].ability.name : pokemon.types[0].type.name} </div>
// 			<div
// 				className="type"> {(pokemon.types[1] !== undefined) ? pokemon.types[0].type.name + "/" + pokemon.types[1].type.name : pokemon.types[0].name} </div>
// 		</div>
// 	);
// }
