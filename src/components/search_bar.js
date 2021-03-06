import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectPokemon } from "../actions/index";

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: "" };

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		this.props.selectPokemon(this.state.term);
		this.setState({ term: "" });
	}

	render() {
		return (
			<form onSubmit={this.state.term ? this.onFormSubmit : ""} className="input-group">
				<input
					placeholder="Search for a pokemon..."
					className="form-control searchbar"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">
						Submit
					</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectPokemon }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
// export default SearchBar;
