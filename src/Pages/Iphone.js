// ***************************************************************
// **** METHOD 1/ Fetching data from DB using API (database created)**
// **************************************************************

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Iphone extends Component {
	constructor() {
		super();
		this.state = {
			// empty array named products to hold all products that will be fetched from JSON
			products: [],
		};
	}
	componentDidMount() {
		// 1. fetching from database
		fetch("http://localhost:3020/iphones")
			.then((res) => res.json())
			.then((productData) => {
				const product = productData.products;
				this.setState((state) => {
					return {
						products: product, //products state is now productData.products
					};
				});
			});
	}

	render() {
		console.log(this.state.products);
		let order = 1; // default order is 1
		return (
			<div>
				<section className="internal-page-wrapper top-100">
					<div className="container">
						<div className="row justify-content-center text-center">
							<div className="col-12">
								<div className="title-wraper">iphones</div>
								<div className="brief-description">
									The best for the brightest.
								</div>
							</div>
						</div>
						{this.state.products.map((singleProduct) => {
							{
								/* let id = singleProduct.Id; */
							}
							let id = singleProduct.product_id;

							{
								/* let title = singleProduct.Title; */
							}
							let title = singleProduct.product_name;
							{
								/* let img = singleProduct.img; */
							}
							let img = singleProduct.product_img;
							{
								/* let Brief = singleProduct.Brief; */
							}
							let Brief = singleProduct.product_brief_description;

							{
								/* let StartPrice = singleProduct.StartPrice; */
							}
							let StartPrice = singleProduct.starting_price;
							{
								/* let PriceRange = singleProduct.PriceRange; */
							}
							let PriceRange = singleProduct.price_range;
							{
								/* ***** */
							}
							{
								/* let productPage = "/iphone/" + id; */
							}
							let productPage = "/iphone/" + id;

							let order1 = 1;
							let order2 = 2;
							{
								/* 1st condition: if default/initial order is changed (b/c it is not 1), change orders */
							}
							if (order != 1) {
								order1 = 2; // make order1 to be on order 2
								order2 = 1; // make order 2 to be order 1
								order--; // to make our current order equal to initial order (this order is now the default order)
								{
									/* 2nd conditition: if initial order has not changed, change our oder by adding 1 to our*/
								}
							} else {
								order++;
							}

							let productDiv = (
								<div
									key={id}
									className="row justify-content-center text-center product-holder h-100"
								>
									<div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
										<div className="product-title">{title}</div>
										<div className="product-brief">{Brief}</div>
										<div className="starting-price">
											{`Starting at ${StartPrice}`}
										</div>
										<div className="monthly-price">{PriceRange}</div>
										<div className="links-wrapper">
											<ul>
												<li>
													<Link to={productPage}>Learn more</Link>
												</li>
											</ul>
										</div>
									</div>

									<div className={`col-sm-12 col-md-6 order-${order2}`}>
										<div className="product-image">
											<img src={img} />
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
export default Iphone;
// **********************************************************************
// ********* METHOD 2/ Fetching data from locally saved json file *********
// ************************************************************************
// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// class Iphone extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			// empty array named products to hold all products that will be fetched from JSON
// 			products: [],
// 		};
// 	}
// 	componentDidMount() {
// 		fetch("/iphones.json")
// 			.then((res) => res.json()) // changing data to JS object
// 			.then((productData) => {
// 				const product = productData.products; //see products in json file
// 				// this is where we are updating our state's initial value, which was [] with values from our json file's products object
// 				this.setState((state) => {
// 					return {
// 						products: product, //products state is now productData.products
// 					};
// 				});
// 			});
// 	}

// 	render() {
// 		console.log(this.state.products);
// 		let order = 1; // default order is 1
// 		return (
// 			<div>
// 				<section className="internal-page-wrapper top-100">
// 					<div className="container">
// 						<div className="row justify-content-center text-center">
// 							<div className="col-12">
// 								<div className="title-wraper">iphones</div>
// 								<div className="brief-description">
// 									The best for the brightest.
// 								</div>
// 							</div>
// 						</div>
// 						{/* we have an object that has an array all the products we fetched from our jsnon file. Mapping creates a new array using original array elements */}
// 						{/* map() method takes a function as a parameter (as call back). This call back function is called on each array element (each product here) and then the map() method returns an array of new products with only properties we want (eg. title, price,..)  Eg. const array1 = [1, 4];, then array1.map(x => x * 2); returns [2, 8]  */}
// 						{this.state.products.map((singleProduct) => {
// 							let id = singleProduct.Id;
// 							let title = singleProduct.Title;
// 							let img = singleProduct.img;
// 							let Brief = singleProduct.Brief;
// 							let StartPrice = singleProduct.StartPrice;
// 							let PriceRange = singleProduct.PriceRange;
// 							let productPage = "/iphone/" + id; // this is linked to learn more below. When learn more from this component  is clicked, it will take us to /iphone/id Eg. iphone/iphonese

// 							let order1 = 1;
// 							let order2 = 2;

// 							if (order != 1) {
// 								order1 = 2;
// 								order2 = 1;
// 								order--;
// 							} else {
// 								order++;
// 							}

// 							let productDiv = (
// 								<div
// 									key={id}
// 									className="row justify-content-center text-center product-holder h-100"
// 								>
// 									<div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
// 										<div className="product-title">{title}</div>
// 										<div className="product-brief">{Brief}</div>
// 										<div className="starting-price">
// 											{`Starting at ${StartPrice}`}
// 										</div>
// 										<div className="monthly-price">{PriceRange}</div>
// 										<div className="links-wrapper">
// 											<ul>
// 												<li>
// 													<Link to={productPage}>Learn more</Link>
// 												</li>
// 											</ul>
// 										</div>
// 									</div>

// 									<div className={`col-sm-12 col-md-6 order-${order2}`}>
// 										<div className="product-image">
// 											<img src={img} />
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
// export default Iphone;
