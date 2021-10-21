import React, { Component } from "react";
// 1. BrowserRouter class ===  BrowserRouter (assinged/imported as Router for convinience) conditionally renders certain components to display on browsesr depending on the route being used in the URL (/ for the home page, /about for the about page, etc.)  BrowserRouter is the parent component that is used to store all of the other components.
//2. Route class/library == is to provide the iformation about which component to load when a specific url path is entered. Route is the conditionally shown component that renders some UI when its path matches the current URL entered. Route defines the path and Renders components based on the URL
// 3. Switch == Switch component is used to render only the first route that matches the location rather than rendering all matching routes. Switch Checks for provided paths and stops checking for any path as soon as it finds exact match
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Home Page
import Alert from "./Component/Alert/Alert";
import Nav from "./Component/Nav/Nav";
import Footer from "./Component/Footer/Footer";
import Main from "./Component/Main/Main";

// Pages
import Mac from "./Pages/Mac";
import Iphone from "./Pages/Iphone";
import Ipad from "./Pages/Ipad";
import Watch from "./Pages/Watch";
import Tv from "./Pages/Tv";
import Music from "./Pages/Music";
import Support from "./Pages/Support";
import Search from "./Pages/Search";
import Cart from "./Pages/Cart";
import Productspage from "./Pages/Productspage";
// import Singleproduct from "./Pages/Singleproduct";
import Four04 from "./Pages/Four04";

// Link to pass additional properties

// ****** function based ***********
function App() {
	return (
		<Router>
			<div>
				<Nav />
				{/* We are not saying just <Alert />  b/c that will make alert show on every page, but alert is only for Homepage*/}
				<Route path="/" exact component={Alert} />
				{/* Switch class from react-router-dom basically does what switch statement in vanilla JS does. If the first path is satisfied, that component will be rendered, if not, it will break and go to the next one. That is why when we have "/kebede", it goes to Four04 page as those above 404 page do not fulfill the condition (but 404 page fulfills the condition for "/kebede") */}
				<Switch>
					{/* path == determines which component to display when that specific path is entered on URL */}
					{/* Exact: I want Main.js to render when path is exactly "/" ONLY*/}
					<Route path="/" exact component={Main} />
					{/* exact: do not show main page if / is followed by something */}
					<Route path="/mac" exact component={Mac} />
					<Route path="/iphone" exact component={Iphone} />
					<Route path="/ipad" exact component={Ipad} />
					<Route path="/watch" exact component={Watch} />
					<Route path="/tv" component={Tv} />
					<Route path="/music" exact component={Music} />
					<Route path="/Support" exact component={Support} />
					<Route path="/cart" exact component={Cart} />
					<Route path="/iphone/:pid" component={Productspage} />
					{/* <Route path="/Singleproduct" exact component={Singleproduct} /> */}
					<Route path="/" component={Four04} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;

// ********** CLASS Based ***********
// class App extends Component {
// 	render() {
// 		return (
// 			<Router>
// 				<div>
// 					<Nav />
// 					{/* exact: do not show main page if / is followed by anything */}
// 					<Route path="/" exact component={Alert} />
// 					{/* Switch class from React basically does what switch statement in vanilla JS does. If the first path is satisfied, that component will be rendered, if not, it will break and go to the next one. That is why when we have "/kebede", it goes to Four04 page as those above 404 page do not fulfill the condition */}
// 					<Switch>
// 						<Route path="/" exact component={Main} />
// 						<Route path="/mac" exact component={Mac} />
// 						<Route path="/iphone" exact component={Iphone} />
// 						<Route path="/ipad" exact component={Ipad} />
// 						<Route path="/watch" exact component={Watch} />
// 						<Route path="/tv" component={Tv} />
// 						<Route path="/music" exact component={Music} />
// 						<Route path="/Support" exact component={Support} />
// 						<Route path="/cart" exact component={Cart} />
// 						<Route path="/iphone/:pid" component={Productspage} />
// 						{/* <Route path="/Singleproduct" exact component={Singleproduct} /> */}
// 						<Route path="/" component={Four04} />
// 					</Switch>
// 					<Footer />
// 				</div>
// 			</Router>
// 		);
// 	}
// }
// export default App;
