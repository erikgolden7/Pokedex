
import React, { Component } from 'react';
import Nav from "../nav.js"
import '../../style/pokedex.css';


class Pokedex extends Component {
	render() {
		return (
			<div>
				<Nav/>
				<p className="page-title">Pokedex</p>
				<div className="background">
				 <div>
					 <table className="table">
						 <tr>
							 <th>Name</th>
							 <th>Type 1</th>
							 <th>Type 2</th>
						 </tr>
						 <tr>
							 <td>Pikachu</td>
							 <td>Lightning</td>
							 <td>None</td>
						 </tr>
						 <tr>
							 <td>Squirtle</td>
							 <td>Water</td>
							 <td>None</td>
						 </tr>
						 <tr>
							 <td>Charizard</td>
							 <td>Flying</td>
							 <td>Fire</td>
						 </tr>
					 </table>
				 </div>
				</div>
			</div>
		);
	}
}

export default Pokedex;
