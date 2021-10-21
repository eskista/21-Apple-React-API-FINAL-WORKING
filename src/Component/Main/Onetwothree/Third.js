import React, { Component } from "react";
import "../../../Common/css/styles.css";
import Commonprop from "./Commonprop";

class Third extends Component {
	render() {
		return (
			<section className="third-hightlight-wrapper">
				<div className="title-wraper bold">iPhone 11 Pro</div>

				<div className="description-wrapper">
					Pro cameras. Pro display. Pro performance.
				</div>
				<Commonprop
					// equipmentName="iPhone 11 Pro"
					// description="Pro cameras. Pro display. Pro performance."
					price="From $24.95/mo. or $599 with trade‑in."
				/>
			</section>
		);
	}
}

export default Third;
