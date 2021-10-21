import React, { Component } from "react";
import "../../../Common/css/styles.css";

class Common extends Component {
	render() {
		return (
			<div className="container">
				<div className="new-alert">{this.props.alertType}</div>

				<div className="title-wraper bold black">
					{this.props.equipmentName}
				</div>

				<div className="description-wrapper black">
					{this.props.description}
				</div>

				<div className="price-wrapper grey">{this.props.price}</div>

				<div className="links-wrapper">
					<ul>
						<li>
							<a href="">Learn more</a>
						</li>
						<li>
							<a href="">Buy</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Common;
