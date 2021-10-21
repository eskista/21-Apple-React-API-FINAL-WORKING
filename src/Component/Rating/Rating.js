import React, { Component } from "react";
import "../../Common/css/styles.css";

// ***************1st Method ************

class Rating extends Component {
	constructor() {
		super();
		this.state = {
			value: 5,
		};
	}
	// Conditions of these 2 functions make sure rating is between 0 and 10
	//  if rating value < 10, increase by 1
	increment = () => {
		this.setState((state) => {
			if (state.value < 10) {
				return { value: state.value + 1 };
			}
		});
	};
	//  if rating value > 0, decrease by 1
	decrement = () => {
		this.setState((state) => {
			if (state.value > 0) {
				return { value: state.value - 1 };
			}
		});
	};
	render() {
		return (
			<div className="rating-wrapper">
				<h2>Rating block</h2>
				<button className="positive" onClick={this.increment}>
					Increment
				</button>
				<button className="negative" onClick={this.decrement}>
					Decrement
				</button>
				<div className="rating-result">
					{/* shows current value, whether increased or decreased   */}
					Your rated this product : {this.state.value}
				</div>
			</div>
		);
	}
}

// ***************2nd Method/ but rating goes below 0 and above 10************

// class Rating extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			value: 0,
// 		};
// 	}

// 	increment = () => {
// 		this.setState((state) => {
// 			return {
// 				value: state.value + 1,
// 			};
// 		});
// 	};

// 	decrement = () => {
// 		this.setState((state) => {
// 			return {
// 				value: state.value - 1,
// 			};
// 		});
// 	};

// 	render() {
// 		return (
// 			<div className="rating-wrapper">
// 				<h2>Rating block</h2>
// 				<button className="positive" onClick={this.increment}>
// 					Increment
// 				</button>
// 				<button className="negative" onClick={this.decrement}>
// 					Decrement
// 				</button>
// 				<div className="rating-result">
// 					{/* shows current value, whether increased or decreased   */}
// 					Your rated this product : {this.state.value}
// 				</div>
// 			</div>
// 		);
// 	}
// }
// *********************
export default Rating;
