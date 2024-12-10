/*-----------------------------------------------------------------

Template Name: Stratify - Business Consulting HTML Template
Author:  ThemeMascot
Author URI: https://themeforest.net/user/thememascot/portfolio
Developer: Kawser Ahmed Roni
Version: 1.0.0
Description: Stratify - Business Consulting HTML Template

-------------------------------------------------------------------
CSS TABLE OF CONTENTS
-------------------------------------------------------------------

01. preloader
02. color switcher
03. header
04. gsap animation
05. js animation
06. fullScreen search
07. swiper slider
08. hover add class remove class
09. search screen
10. background image
11. magnificPopup
12. coundawn
13. counterup
14. back to top
15. wow animation

------------------------------------------------------------------*/

(function ($) {
	("use strict");

	// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	// // Set up ScrollSmoother
	// ScrollSmoother.create({
	// 	wrapper: ".smooth-wrapper",
	// 	content: ".smooth-content",
	// 	smooth: 1.5, // Smoothness factor (adjust as needed)
	// 	effects: true,
	// });

	// // Animate the cards to align when they reach the center of the viewport
	// gsap.to(".card", {
	// 	y: 0, // Reset Y position
	// 	stagger: 0.1, // Delay between each card
	// 	ease: "power2.out",
	// 	scrollTrigger: {
	// 		trigger: ".row",
	// 		start: "center center", // Start animation when .row is centered
	// 		toggleActions: "play none none none",
	// 	},
	// });

	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	// Initialize ScrollSmoother only if the required wrapper exists
	if (document.querySelector(".smooth-wrapper")) {
		ScrollSmoother.create({
			wrapper: ".smooth-wrapper",
			content: ".smooth-content",
			smooth: 1.5, // Smoothness factor
			effects: true,
		});
	}

	// Check if .card elements exist before animating
	if (document.querySelectorAll(".card").length > 0) {
		gsap.to(".card", {
			y: 0, // Reset Y position
			stagger: 0.1, // Delay between each card
			ease: "power2.out",
			scrollTrigger: {
				trigger: ".row",
				start: "center center", // Start animation when .row is centered
				toggleActions: "play none none none",
			},
		});
	}
})(jQuery);
