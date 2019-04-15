import PropTypes from "prop-types";
import React from "react";

export default class TitleBar extends React.Component {
	render() {
		// need this to return info from jsx
		// below is the prop that gets passed in
		return (
			<div className="title-bar">
				<div className="wrapper">
					<h1>{this.props.title}</h1>
					<h2 className="title-bar__subtitle">{this.props.subtitle}</h2>
				</div>
			</div>
		);
	}
}

TitleBar.propTypes = {
	title: PropTypes.string
};

TitleBar.defaultProps = {
	title: "Score Keeper"
};
