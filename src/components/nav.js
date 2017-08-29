import React, { Component } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import '../style/App.css';

class Nav extends Component {
	render() {
		return (

			<div className="App-header">
				<div>
					<Link to="/cards">
						<div className="card-logo"></div>
					</Link>
				</div>
				<div>
					<Link to="/">
						<img src={logo} className="App-logo" alt="logo" />
					</Link>
				</div>
				<div>
					<Link to="/pokedex">
						<div className="pokedex-logo"></div>
					</Link>
				</div>
			</div>
		);
	}
}

export default Nav;
