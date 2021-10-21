import $ from "jquery";

$(document).ready(function () {
	// Condition 1: This (adding "someClass" using JS) works only when window size is < 768 when window is openend(not for rezised screen).
	if ($(window).width() <= 768) {
		$(".footer-links-wrapper").addClass("someClass");
	} else {
		$(".footer-links-wrapper").removeClass("someClass");
	}
	// when window is resized, resize event fires (necessary because when we have a big screen, then we resize it, toggle only works if we have the resize function below)
	$(window).on("resize", function (event) {
		if ($(window).width() <= 768) {
			$(".footer-links-wrapper").addClass("someClass");
		} else {
			// we are removing it to avoid slideToggle on >768 screen
			$(".footer-links-wrapper").removeClass("someClass");
			$(".footer-links-wrapper ul").show(); // test on small scree (if slideToggle on small, when resizing to big, ul remains toggled)
		}
	});
	// Footer collapse functionality
	$(document).on("click", ".someClass h3", function () {
		$(this).next("ul").slideToggle();
		$(this).toggleClass("rotatePlusIcon"); // rotates icon
	});

	// Search bar
	$(".search-link").on("click", function (event) {
		event.preventDefault(); // to prevent loading a page when clicking it
		$(".navbar-collapse.collapse").removeClass("show");
		$(".searchbox").slideToggle();
	});
});

// // ****************************
// METHOD 2/very easy/ No JS class adding needed

// $(".footer-links-wrapper h3").click(function () {
// 	if ($(window).width() <= 768) {
// 		$(this).next("ul").slideToggle();
// 		// $(this).parent().children("ul").slideToggle();
// 		$(this).toggleClass("iconRotator");
// 	}
// });

// $(window).on("resize", function () {
// 	if ($(window).width() > 768) {
// 		$(".footer-links-wrapper ul").show();
// 	}
// });
// $(window).on("resize", function () {
// 	if ($(window).width() <= 768) {
// 		$(".footer-links-wrapper ul").hide();
// 	}
// });
