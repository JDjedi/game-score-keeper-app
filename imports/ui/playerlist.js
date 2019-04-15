import React from "react";
import Player from "./player";
import { Players } from "./../api/players";
import PropTypes from "prop-types";
import FlipMove from 'react-flip-move';

export default class PlayerList extends React.Component {
	renderPlayer() {
		if (this.props.players.length === 0) {
			return (
				<div className="item">
					<p className="item__message"> Add some players to begin score keeping!</p>
				</div>
			)
		} else {
			return this.props.players.map(function(player) {
				return <Player key={player._id} player={player} />;
			});
		}
	}

	render() {
		return (
			 <FlipMove maintainContainerHeight={true}>{/*Third party library here*/}
				{this.renderPlayer()}
			</FlipMove>
		)
	}
}

PlayerList.propTypes = {
	players: PropTypes.array.isRequired
};

