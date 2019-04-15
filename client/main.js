import React from "react"; // we can just use 'react', and 'react-dom' this way bc they're node packages
import ReactDOM from "react-dom"; // they make it easier on us
import { Meteor } from "meteor/meteor"; // meteor module callback
import { Tracker } from "meteor/tracker";
import App from "./../imports/ui/app";
import { Players } from "./../imports/api/players"; // this creates the miniMongo collection in the client

Meteor.startup(() => {
	// this exec. once the DOM is ready
	Tracker.autorun(() => {
		let playersDbCall = Players.find({}, { sort: { score: -1 } }).fetch(); // sort option is the 2nd option object in the find() func
		let title = "Score Keeper"; // where this gets passed in is considered a prop!
		ReactDOM.render(
			<App title={title} players={playersDbCall} />,
			document.getElementById("app")
		);
	});
});

// let User = {
// 	name: "JD",
// 	sayHi() {
// 		// do not bind arguments either, bad candidate for obj methods
// 		setTimeout(() => {
// 			// arrow functions DO NOT bind a this keyword!
// 			console.log(this.name); // => use their parent's "this" reference!
// 		}, 1000);
// 	}
// };
//
// user.sayHi(1, 45)
