import React, { Component } from "react";
// import Alert from "../Alert/Alert";
import First from "./Onetwothree/First";
import Second from "./Onetwothree/Second";
import Third from "./Onetwothree/Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";
import Sixth from "./Sixth";
import Rating from "../Rating/Rating";
import Youtube from "../Youtube/Youtube";

class Main extends Component {
	render() {
		return (
			<div>
				{/* <Alert /> */}

				<First />
				<Second />
				<Third />
				<Fourth />
				<Fifth />
				<Sixth />
				<Youtube />
				<Rating />
			</div>
		);
	}
}
export default Main;
