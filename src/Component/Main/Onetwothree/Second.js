import React, { Component } from "react";
import "../../../Common/css/styles.css";
import Commonprop from "./Commonprop";

class Second extends Component {
	constructor() {
		super();
		this.state = {
			currentPrice: "From $999.",
		};
	}
	render() {
		return (
			<section className="second-hightlight-wrapper">
				<Commonprop
					alertType="New"
					equipmentName="MacBook Air "
					description="Twice the speed. Twice the storage."
					price={this.state.currentPrice}
					// ORRR, without using the constructor/state above
					// price="From $999."
				/>
			</section>
		);
	}
}

export default Second;
