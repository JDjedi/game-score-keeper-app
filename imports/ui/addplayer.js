import React from "react";
import { Players } from "./../api/players"; // this creates the miniMongo collection in the client

// arrow functions DO NOT bind a this keyword!
// do not bind arguments either, bad candidate for obj methods
// => use their parents this reference!
// Old functionality
// const handleSubmit = e => {
// };

export default class AddPlayer extends React.Component {
	handleSubmit(e) {
		let playerName = e.target.playerName.value;
		e.preventDefault();

		if (playerName) {
			Players.insert({
				name: playerName,
				score: this.props.score
			});
			e.target.playerName.value = "";
		}
	}

	render() {
		// need this to return info from jsx
		// .bind() this binds the handleSubmit function to use this properly
		// pass in a method defined on componenet in a call on event handler you have to preserve the binding
		// since were calling the function in an event handler we need to bind(this)
		return (
			<div className="item">
				<form className="form" onSubmit={this.handleSubmit.bind(this)}>
					<input
						className="form__input"
						type="text"
						name="playerName"
						placeholder="Player name"
					/>
					<button className="button">Add Player(Functional)</button>
				</form>
			</div>
		);
	}
}
