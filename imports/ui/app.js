import React from 'react';
import TitleBar from "./titlebar";
import AddPlayer from "./addplayer";
import PlayerList from "./playerlist";
import { Players } from "./../api/players";
import PropTypes from 'prop-types'; 

export default class App extends React.Component {
	render() {
		return (
			<div>
				<TitleBar title={this.props.title} subtitle="Created by Jonathan Diaz"/>
				<div className="wrapper">
					<PlayerList players={this.props.players} />
					<AddPlayer score={0} />
				</div>			
			</div>
		)
	}
}

App.propTypes = {
	title: PropTypes.string.isRequired,
	players: PropTypes.array.isRequired
}

