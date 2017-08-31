import React from "react";


const PokedexDetail = ({ pokemon }) => {
	if (!pokemon) {
		return <div className="detail-box">Waiting for input...</div>;
	}
	
	const url = pokemon.url;
	console.log(url);
	
	return (
		<div className="detail-box">
			{pokemon.name}
		</div>
	);
};

export default PokedexDetail;
