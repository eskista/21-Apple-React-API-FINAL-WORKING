// METHOD 1:  function based props  component

import React from "react";
import Navlinks from "./Navlinks";
import "../../Common/css/styles.css";
import logo from "../../Common/images/icons/logo.png";
import searchicon from "../../Common/images/icons/search-icon-sm.png";
import cart from "../../Common/images/icons/cart-sm.png";

function Nav() {
	return (
		<div className="nav-wrapper fixed-top">
			<div className="container">
				<nav className="navbar navbar-toggleable-sm navbar-expand-md">
					<button
						className="navbar-toggler navbar-toggler-right"
						type="button"
						data-toggle="collapse"
						data-target=".navbar-collapse"
					>
						☰
					</button>
					<a className="logo-link navbar-brand mx-auto" href="/">
						<img src={logo} />
					</a>
					<div className="navbar-collapse collapse">
						<ul className="navbar-nav nav-justified w-100 nav-fill">
							<Navlinks linkURL="/mac" linkName="Mac" />
							<Navlinks linkURL="/iphone" linkName="iphone" />
							<Navlinks linkURL="/ipad" linkName="ipad" />
							<Navlinks linkURL="/Watch" linkName="Watch" />
							<Navlinks linkURL="/TV" linkName="TV" />
							<Navlinks linkURL="/Music" linkName="Music" />
							<Navlinks linkURL="/Support" linkName="Support" />
							{/* <Navlinks linkURL="/Support" linkName="Support" /> */}
							<li className="nav-item">
								<a
									className="search-link nav-link js-scroll-trigger"
									href="/search/"
								>
									<img src={searchicon} />
								</a>
							</li>
							<li className="nav-item">
								<a
									className="cart-link nav-link js-scroll-trigger"
									href="/cart/"
								>
									<img src={cart} />
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Nav;
// //METHOD 2: class based props  component

// import React, { Component } from "react";
// import Navlinks from "./Navlinks";
// import "../../Common/css/styles.css";
// import logo from "../../Common/images/icons/logo.png";
// import searchicon from "../../Common/images/icons/search-icon-sm.png";
// import cart from "../../Common/images/icons/cart-sm.png";

// class Nav extends Component {
//   render() {
//     return (
//       <div className="nav-wrapper fixed-top">
//         <div className="container">
//           <nav className="navbar navbar-toggleable-sm navbar-expand-md">
//             <button
//               className="navbar-toggler navbar-toggler-right"
//               type="button"
//               data-toggle="collapse"
//               data-target=".navbar-collapse"
//             >
//               ☰
//             </button>
//             <a className="logo-link navbar-brand mx-auto" href="/">
//               <img src={logo} />
//             </a>
//             <div className="navbar-collapse collapse">
//               <ul className="navbar-nav nav-justified w-100 nav-fill">
//                 <Navlinks linkURL="/mac" linkName="Mac" />
//                 <Navlinks linkURL="/iphone" linkName="iphone" />
//                 <Navlinks linkURL="/ipad" linkName="ipad" />
//                 <Navlinks linkURL="/Watch" linkName="Watch" />
//                 <Navlinks linkURL="/TV" linkName="TV" />
//                 <Navlinks linkURL="/Music" linkName="Music" />
//                 <Navlinks linkURL="/Support" linkName="Support" />
//                 <li className="nav-item">
//                   <a
//                     className="search-link nav-link js-scroll-trigger"
//                     href="/search/"
//                   >
//                     <img src={searchicon} />
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="cart-link nav-link js-scroll-trigger"
//                     href="/cart/"
//                   >
//                     <img src={cart} />
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </div>
//       </div>
//     );
//   }
// }

// export default Nav;
