// METHOD 1:  function based props  component
import React from "react";
import "../../Common/css/styles.css";

//Q. Why pass props as argument in functional components? unlike class components (which are ES6 classes), functional components cannot have constructor() or naturally inherit props from the parent components. You have to pass props as an argument (that is what it is originally) to the functional component.
function Navlinks(props) {
	return (
		<li className="nav-item">
			<a className="nav-link js-scroll-trigger" href={props.linkURL}>
				{props.linkName}
			</a>
		</li>
	);
}

export default Navlinks;

// //METHOD 2: class based props  component
// import React, { Component } from "react";
// import "../../Common/css/styles.css";

// class Navlinks extends Component {
// 	render() {
// 		return (
// 			<li className="nav-item">
// 				<a className="nav-link js-scroll-trigger" href={this.props.linkURL}>
// 					{this.props.linkName}
// 				</a>
// 			</li>
// 		);
// 	}
// }

// export default Navlinks;
