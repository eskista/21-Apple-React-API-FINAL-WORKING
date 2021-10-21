import React, { Component } from "react";
import "../../Common/css/styles.css";

class Footerlinks extends Component {
	render() {
		return (
			<li>
				<a href={this.props.linkURL}>{this.props.linkName}</a>
			</li>
		);
	}
}

export default Footerlinks;
