// ***************************************************************
// **** METHOD 1/ Fetching data from DB using API (database created)**
// **************************************************************
// import React, { Component } from "react";

// class Productspage extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			// products array here is to hold all products from JSON file. Note! We could have copied and pasted the entire products object from json file within the array below, but that will be hard codiing it in our component
// 			products: [],
// 			// We assigned all routes that come after "/Iphone" to PID for "/iphone/:pid" route on App.js
// 			// Passing the product_id from our API/info from db as value for anything that is after iphone/ AND making that value availabel for Productspage component. We have that value as pid under our app js
// 			productID: props.match.params.pid,
// 		};
// 	}

// 	componentDidMount() {
// 		fetch("/iphones.json") // also you can add "http://localhost:3000/iphones.json"
// 			.then((res) => res.json())
// 			// Literally telling it to filter only a signle product from the response (products JSON)
// 			.then((products) => {
// 				const productList = products.products;
// 				const singleProduct = productList.filter(
// 					// if the filtered product has the same id as productID we defined above, save it as singleProduct
// 					// (product) => product.Id == this.state.productID
// 					(product) => product.product_id == this.state.productID
// 				);
// 				this.setState((state) => {
// 					return {
// 						products: singleProduct,
// 					};
// 				});
// 			});
// 	}

// 	render() {
// 		// console.log(this.state.products);
// 		// console.log(this.state.productID);
// 		return (
// 			<div>
// 				<section className="internal-page-wrapper top-100">
// 					<div className="container">
// 						{this.state.products.map((product) => {
// 							{
// 								/* let id = product.Id; */
// 							}
// 							let id = product.product_id;
// 							{
// 								/* let title = product.Title; */
// 							}
// 							let title = product.product_name;
// 							{
// 								/* let img = product.img; */
// 							}
// 							let img = product.product_img;
// 							{
// 								/* let Brief = product.Brief; */
// 							}
// 							let Brief = product.brief_description;
// 							{
// 								/* let StartPrice = product.StartPrice; */
// 							}
// 							let StartPrice = product.starting_price;
// 							{
// 								/* let PriceRange = product.PriceRange; */
// 							}
// 							let PriceRange = product.price_range;

// 							let details = product.product_description;

// 							let productDiv = (
// 								<div key={id}>
// 									<div className="row justify-content-center text-center">
// 										<div className="col-12">
// 											<div className="title-wraper">{title}</div>
// 											<div className="brief-description">{Brief}</div>
// 										</div>
// 									</div>

// 									<div className="row justify-content-center text-center product-holder h-100">
// 										<div className={`col-sm-12 col-md-6 my-auto`}>
// 											<div className="starting-price">
// 												{`Starting at ${StartPrice}`}
// 											</div>
// 											<div className="monthly-price">{PriceRange}</div>
// 											<div className="product-details">{details}</div>
// 										</div>

// 										<div className={`col-sm-12 col-md-6`}>
// 											<div className="product-image">
// 												<img src={img} />
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							);
// 							return productDiv;
// 						})}
// 					</div>
// 				</section>
// 			</div>
// 		);
// 	}
// }
// export default Productspage;
// **********************************************************************
// ********* METHOD 2/ Fetching data from locally saved json file *********
// ************************************************************************
import React, { Component } from "react";

class Productspage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			productID: props.match.params.pid,
		};
	}

	componentDidMount() {
		fetch("http://localhost:3020/iphones")
			.then((res) => res.json())
			.then((products) => {
				const productList = products.products;
				const singleProduct = productList.filter(
					(product) => product.product_id == this.state.productID
				);
				this.setState((state) => {
					return {
						products: singleProduct,
					};
				});
			});
	}

	render() {
		console.log(this.state.products);
		// console.log(this.state.productID);
		return (
			<div>
				<section className="internal-page-wrapper top-100">
					<div className="container">
						{this.state.products.map((product) => {
							let id = product.product_id;
							let title = product.product_name;
							let img = product.product_img;
							let Brief = product.product_descriptio;
							let StartPrice = product.starting_price;
							let PriceRange = product.price_range;
							let details = product.product_description;
							let productDiv = (
								<div key={id}>
									<div className="row justify-content-center text-center">
										<div className="col-12">
											<div className="title-wraper">{title}</div>
											<div className="brief-description">{Brief}</div>
										</div>
									</div>

									<div className="row justify-content-center text-center product-holder h-100">
										<div className={`col-sm-12 col-md-6 my-auto`}>
											<div className="starting-price">
												{`Starting at ${StartPrice}`}
											</div>
											<div className="monthly-price">{PriceRange}</div>
											<div className="product-details">{details}</div>
										</div>

										<div className={`col-sm-12 col-md-6`}>
											<div className="product-image">
												<img src={img} />
											</div>
										</div>
									</div>
								</div>
							);
							return productDiv;
						})}
					</div>
				</section>
			</div>
		);
	}
}
export default Productspage;
