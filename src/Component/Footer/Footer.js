// METHOD 1:Footer.js's toggle JS/jQuery code imported from external JS (called cutom.js)
import React, { Component } from "react";
import "../../Common/css/styles.css";
import Footerlinks from "./Footerlinks";
import countrypic from "../../Common/images/icons/cart-sm.png";
// ********** importing this for footer jquery toggle ******
import "../../Common/js/custom";

class Footer extends Component {
	render() {
		return (
			<footer className="footer-wrapper">
				<div className="container">
					<div className="upper-text-container">
						<p>
							1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
							promotional pricing is after trade‑in of iPhone 8 Plus and iPhone
							X in good condition. Additional trade‑in values require purchase
							of a new iPhone, subject to availability and limits. Must be at
							least 18. Apple or its trade-in partners reserve the right to
							refuse or limit any Trade In transaction for any reason. In‑store
							trade‑in requires presentation of a valid, government-issued photo
							ID (local law may require saving this information). Sales tax may
							be assessed on full value of new iPhone. Additional terms from
							Apple or Apple’s trade-in partners may apply. Monthly pricing:
							Available to qualified customers and requires 0% APR, 24-month
							installment loan with Citizens One or Apple Card Monthly
							Installments and iPhone activation with AT&T, Sprint, T-Mobile, or
							Verizon. Taxes and shipping not included. Additional Apple Card
							Monthly Installments terms are in the{" "}
							<a
								href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
								target="_blank"
							>
								{" "}
								Customer Agreement
							</a>
							. Additional iPhone Payments terms are{" "}
							<a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
								{" "}
								here
							</a>
							.
						</p>
						<p>
							2. Subscription required.<br></br> Magic Keyboard sold separately.
							<br></br> Apple TV+ is $4.99/month after free trial. One
							subscription per Family Sharing group. Offer good for 3 months
							after eligible device activation.Plan automatically renews until
							cancelled. Restrictions and other{" "}
							<a href="https://www.apple.com/promo/">terms </a> apply.
						</p>
					</div>
					<div className="footer-links-wrapper row">
						<div className="links-wrapper-1 col-sm-12 col-md">
							<h3>Shop and Learn</h3>
							<ul>
								<Footerlinks linkURL="#" linkName="Mac" />
								<Footerlinks linkURL="#" linkName="iPad" />
								<Footerlinks linkURL="#" linkName="iPhone" />
								<Footerlinks linkURL="#" linkName="Watch" />
								<Footerlinks linkURL="#" linkName="TV" />
								<Footerlinks linkURL="#" linkName="Music" />
								<Footerlinks linkURL="#" linkName="AirPods" />
								<Footerlinks linkURL="#" linkName="HomePod" />
								<Footerlinks linkURL="#" linkName="iPod touch" />
								<Footerlinks linkURL="#" linkName="Accessories" />
								<Footerlinks linkURL="#" linkName="Gift Cards" />
							</ul>
						</div>
						<div className="links-wrapper-2 col-sm-12 col-md">
							<h3>Services</h3>
							<ul>
								<Footerlinks linkURL="#" linkName="Apple Music" />
								<Footerlinks linkURL="#" linkName="Apple News+" />
								<Footerlinks linkURL="#" linkName="Apple TV+" />
								<Footerlinks linkURL="#" linkName="Apple Arcade" />
								<Footerlinks linkURL="#" linkName="Apple Card" />
								<Footerlinks linkURL="#" linkName="iCloud" />
							</ul>
							<h3>Account</h3>
							<ul>
								<Footerlinks linkURL="#" linkName="Manage Your Apple ID" />
								<Footerlinks linkURL="#" linkName="Apple Store Account" />
								<Footerlinks linkURL="#" linkName="iCloud.com" />
							</ul>
						</div>
						<div className="links-wrapper-3 col-sm-12 col-md">
							<h3>Apple Store</h3>
							<ul>
								<Footerlinks linkURL="#" linkName="Find a Store" />
								<Footerlinks linkURL="#" linkName="Genius Bar" />
								<Footerlinks linkURL="#" linkName="Today at Apple" />
								<Footerlinks linkURL="#" linkName="Apple Camp" />
								<Footerlinks linkURL="#" linkName="Field Trip" />
								<Footerlinks linkURL="#" linkName="Apple Store App" />
								<Footerlinks linkURL="#" linkName="Refurbished and Clearance" />
								<Footerlinks linkURL="#" linkName="Financing" />
								<Footerlinks linkURL="#" linkName="Apple Trade In" />
								<Footerlinks linkURL="#" linkName="Order Status" />
								<Footerlinks linkURL="#" linkName="Shopping Help" />
							</ul>
						</div>
						<div className="links-wrapper-4 col-sm-12 col-md">
							<h3>For Business</h3>
							<ul>
								<Footerlinks linkURL="#" linkName="Apple and Business" />
								<Footerlinks linkURL="#" linkName="Shop for Business" />
							</ul>
							<h3>For Education</h3>
							<ul>
								<Footerlinks linkURL="#" linkName="Apple and Education" />
								<Footerlinks linkURL="#" linkName="Shop for College" />
							</ul>
							<h3>For Healthcare</h3>
							<ul>
								<Footerlinks linkURL="#" linkName="Manage Your Apple ID" />
								<Footerlinks linkURL="#" linkName="Apple Store Account" />
								<Footerlinks linkURL="#" linkName="iCloud.com" />
							</ul>
							<h3>For Government</h3>
							<ul>
								<Footerlinks linkURL="#" linkName="Apple and Education" />
								<Footerlinks linkURL="#" linkName="Shop for College" />
							</ul>
						</div>
						<div className="links-wrapper-5 col-sm-12 col-md">
							<h3>Apple Values</h3>
							<ul>
								<Footerlinks linkURL="#" linkName="Find a Store" />
								<Footerlinks linkURL="#" linkName="Genius Bar" />
								<Footerlinks linkURL="#" linkName="Today at Apple" />
								<Footerlinks linkURL="#" linkName="Apple Camp" />
								<Footerlinks linkURL="#" linkName="Field Trip" />
								<Footerlinks linkURL="#" linkName="Apple Store App" />
							</ul>
							<h3>About Apple</h3>
							<ul>
								<Footerlinks linkURL="#" linkName="Find a Store" />
								<Footerlinks linkURL="#" linkName="Genius Bar" />
								<Footerlinks linkURL="#" linkName="Today at Apple" />
								<Footerlinks linkURL="#" linkName="Apple Camp" />
								<Footerlinks linkURL="#" linkName="Field Trip" />
								<Footerlinks linkURL="#" linkName="Apple Store App" />
							</ul>
						</div>
					</div>
					<div className="my-apple-wrapper">
						More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
						<a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
					</div>
					<div className="copyright-wrapper row">
						<div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
							Copyright &copy; 2020 Apple Inc. All rights reserved.
						</div>
						<div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
							<ul>
								<Footerlinks linkURL="#" linkName="Privacy Policy" />
								<Footerlinks linkURL="#" linkName=">Terms of Use" />
								<Footerlinks linkURL="#" linkName="Sales and Refunds" />
								<Footerlinks linkURL="#" linkName="Legal" />
								<Footerlinks linkURL="#" linkName="Site Map" />
							</ul>
						</div>
						<div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
							<div className="flag-wrapper">
								<img src={countrypic} />
							</div>
							<div className="footer-country-name">United States</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
export default Footer;

// *************************************************************

// METHOD 2: Footer.js's toggle JS/jQuery code in our class component

// import React, { Component } from "react";
// import $ from "jquery";

// import "../../Common/css/styles.css";
// import Footerlinks from "./Footerlinks";
// import countrypic from "../../Common/images/icons/cart-sm.png";

// class Footer extends Component {
// 	componentDidMount() {
// 		// Condition 1: This (adding "someClass" using JS) works only when window size is < 768 when window is openend(not for rezised screen).
// 		if ($(window).width() <= 768) {
// 			$(".footer-links-wrapper").addClass("someClass");
// 		} else {
// 			$(".footer-links-wrapper").removeClass("someClass");
// 		}
// 		// when window is resized, resize event fires (necessary because when we have a big screen, then we resize it, toggle only works if we have the resize function below)
// 		$(window).on("resize", function (event) {
// 			if ($(window).width() <= 768) {
// 				$(".footer-links-wrapper").addClass("someClass");
// 			} else {
// 				// we are removing it to avoid slideToggle on >768 screen
// 				$(".footer-links-wrapper").removeClass("someClass");
// 				$(".footer-links-wrapper ul").show(); // showing the ul on >768 screen width
// 			}
// 		});
// 		// Footer collapse functionality
// 		$(document).on("click", ".someClass h3", function () {
// 			$(this).next("ul").slideToggle();
// 			$(this).toggleClass("rotatePlusIcon"); // rotates icon
// 		});
// 		// Search bar
// 		// // ***********************************
// 		$(".search-link").on("click", function (event) {
// 			event.preventDefault();
// 			// $(".navbar-collapse.collapse").removeClass("show");
// 			// $(".searchbox").slideToggle();
// 		});
// 	}

// 	render() {
// 		return (
// 			<footer className="footer-wrapper">
// 				<div className="container">
// 					<div className="upper-text-container">
// 						<p>
// 							1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
// 							promotional pricing is after trade‑in of iPhone 8 Plus and iPhone
// 							X in good condition. Additional trade‑in values require purchase
// 							of a new iPhone, subject to availability and limits. Must be at
// 							least 18. Apple or its trade-in partners reserve the right to
// 							refuse or limit any Trade In transaction for any reason. In‑store
// 							trade‑in requires presentation of a valid, government-issued photo
// 							ID (local law may require saving this information). Sales tax may
// 							be assessed on full value of new iPhone. Additional terms from
// 							Apple or Apple’s trade-in partners may apply. Monthly pricing:
// 							Available to qualified customers and requires 0% APR, 24-month
// 							installment loan with Citizens One or Apple Card Monthly
// 							Installments and iPhone activation with AT&T, Sprint, T-Mobile, or
// 							Verizon. Taxes and shipping not included. Additional Apple Card
// 							Monthly Installments terms are in the{" "}
// 							<a
// 								href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
// 								target="_blank"
// 							>
// 								{" "}
// 								Customer Agreement
// 							</a>
// 							. Additional iPhone Payments terms are{" "}
// 							<a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
// 								{" "}
// 								here
// 							</a>
// 							.
// 						</p>
// 						<p>
// 							2. Subscription required.<br></br> Magic Keyboard sold separately.
// 							<br></br> Apple TV+ is $4.99/month after free trial. One
// 							subscription per Family Sharing group. Offer good for 3 months
// 							after eligible device activation.Plan automatically renews until
// 							cancelled. Restrictions and other{" "}
// 							<a href="https://www.apple.com/promo/">terms </a> apply.
// 						</p>
// 					</div>
// 					<div className="footer-links-wrapper row">
// 						<div className="links-wrapper-1 col-sm-12 col-md">
// 							<h3>Shop and Learn</h3>
// 							<ul>
// 								<Footerlinks linkURL="#" linkName="Mac" />
// 								<Footerlinks linkURL="#" linkName="iPad" />
// 								<Footerlinks linkURL="#" linkName="iPhone" />
// 								<Footerlinks linkURL="#" linkName="Watch" />
// 								<Footerlinks linkURL="#" linkName="TV" />
// 								<Footerlinks linkURL="#" linkName="Music" />
// 								<Footerlinks linkURL="#" linkName="AirPods" />
// 								<Footerlinks linkURL="#" linkName="HomePod" />
// 								<Footerlinks linkURL="#" linkName="iPod touch" />
// 								<Footerlinks linkURL="#" linkName="Accessories" />
// 								<Footerlinks linkURL="#" linkName="Gift Cards" />
// 							</ul>
// 						</div>
// 						<div className="links-wrapper-2 col-sm-12 col-md">
// 							<h3>Services</h3>
// 							<ul>
// 								<Footerlinks linkURL="#" linkName="Apple Music" />
// 								<Footerlinks linkURL="#" linkName="Apple News+" />
// 								<Footerlinks linkURL="#" linkName="Apple TV+" />
// 								<Footerlinks linkURL="#" linkName="Apple Arcade" />
// 								<Footerlinks linkURL="#" linkName="Apple Card" />
// 								<Footerlinks linkURL="#" linkName="iCloud" />
// 							</ul>
// 							<h3>Account</h3>
// 							<ul>
// 								<Footerlinks linkURL="#" linkName="Manage Your Apple ID" />
// 								<Footerlinks linkURL="#" linkName="Apple Store Account" />
// 								<Footerlinks linkURL="#" linkName="iCloud.com" />
// 							</ul>
// 						</div>
// 						<div className="links-wrapper-3 col-sm-12 col-md">
// 							<h3>Apple Store</h3>
// 							<ul>
// 								<Footerlinks linkURL="#" linkName="Find a Store" />
// 								<Footerlinks linkURL="#" linkName="Genius Bar" />
// 								<Footerlinks linkURL="#" linkName="Today at Apple" />
// 								<Footerlinks linkURL="#" linkName="Apple Camp" />
// 								<Footerlinks linkURL="#" linkName="Field Trip" />
// 								<Footerlinks linkURL="#" linkName="Apple Store App" />
// 								<Footerlinks linkURL="#" linkName="Refurbished and Clearance" />
// 								<Footerlinks linkURL="#" linkName="Financing" />
// 								<Footerlinks linkURL="#" linkName="Apple Trade In" />
// 								<Footerlinks linkURL="#" linkName="Order Status" />
// 								<Footerlinks linkURL="#" linkName="Shopping Help" />
// 							</ul>
// 						</div>
// 						<div className="links-wrapper-4 col-sm-12 col-md">
// 							<h3>For Business</h3>
// 							<ul>
// 								<Footerlinks linkURL="#" linkName="Apple and Business" />
// 								<Footerlinks linkURL="#" linkName="Shop for Business" />
// 							</ul>
// 							<h3>For Education</h3>
// 							<ul>
// 								<Footerlinks linkURL="#" linkName="Apple and Education" />
// 								<Footerlinks linkURL="#" linkName="Shop for College" />
// 							</ul>
// 							<h3>For Healthcare</h3>
// 							<ul>
// 								<Footerlinks linkURL="#" linkName="Manage Your Apple ID" />
// 								<Footerlinks linkURL="#" linkName="Apple Store Account" />
// 								<Footerlinks linkURL="#" linkName="iCloud.com" />
// 							</ul>
// 							<h3>For Government</h3>
// 							<ul>
// 								<Footerlinks linkURL="#" linkName="Apple and Education" />
// 								<Footerlinks linkURL="#" linkName="Shop for College" />
// 							</ul>
// 						</div>
// 						<div className="links-wrapper-5 col-sm-12 col-md">
// 							<h3>Apple Values</h3>
// 							<ul>
// 								<Footerlinks linkURL="#" linkName="Find a Store" />
// 								<Footerlinks linkURL="#" linkName="Genius Bar" />
// 								<Footerlinks linkURL="#" linkName="Today at Apple" />
// 								<Footerlinks linkURL="#" linkName="Apple Camp" />
// 								<Footerlinks linkURL="#" linkName="Field Trip" />
// 								<Footerlinks linkURL="#" linkName="Apple Store App" />
// 							</ul>
// 							<h3>About Apple</h3>
// 							<ul>
// 								<Footerlinks linkURL="#" linkName="Find a Store" />
// 								<Footerlinks linkURL="#" linkName="Genius Bar" />
// 								<Footerlinks linkURL="#" linkName="Today at Apple" />
// 								<Footerlinks linkURL="#" linkName="Apple Camp" />
// 								<Footerlinks linkURL="#" linkName="Field Trip" />
// 								<Footerlinks linkURL="#" linkName="Apple Store App" />
// 							</ul>
// 						</div>
// 					</div>
// 					<div className="my-apple-wrapper">
// 						More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
// 						<a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
// 					</div>
// 					<div className="copyright-wrapper row">
// 						<div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
// 							Copyright &copy; 2020 Apple Inc. All rights reserved.
// 						</div>
// 						<div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
// 							<ul>
// 								<Footerlinks linkURL="#" linkName="Privacy Policy" />
// 								<Footerlinks linkURL="#" linkName=">Terms of Use" />
// 								<Footerlinks linkURL="#" linkName="Sales and Refunds" />
// 								<Footerlinks linkURL="#" linkName="Legal" />
// 								<Footerlinks linkURL="#" linkName="Site Map" />
// 							</ul>
// 						</div>
// 						<div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
// 							<div className="flag-wrapper">
// 								<img src={countrypic} />
// 							</div>
// 							<div className="footer-country-name">United States</div>
// 						</div>
// 					</div>
// 				</div>
// 			</footer>
// 		);
// 	}
// }

// export default Footer;
