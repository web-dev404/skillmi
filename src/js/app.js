import * as flsFunctions from "./modules/functions.js";
import Swiper from "swiper";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper";
import smoothScroll from "./modules/smooth-scroll.js";
import AOS from "aos";
import LazyLoad from "vanilla-lazyload";
var lazyLoadInstance = new LazyLoad({
	// Your custom settings go here
});
window.addEventListener("load", event => {
	flsFunctions.isWebp();
	const current = document.querySelector(".news__current");
	const courses = new Swiper(".courses-content__slider", {
		loop: true,
		effect: "fade",
		autoplay: {
			disableOnInteraction: false,
		},
		fadeEffect: {
			crossFade: true,
		},
		speed: 750,
		modules: [Navigation, Pagination, EffectFade, Autoplay],
		navigation: {
			nextEl: ".courses-content__play",
		},
		pagination: {
			el: ".courses-content__pagination",
			bulletClass: "swiper-pagination-bullet-custom",
			bulletActiveClass: "swiper-pagination-bullet-custom--active",
			renderBullet: function (index, className) {
				return `<div class="${className}" data-index="${index}">
        <svg viewbox="0 0 20 20">
            <circle r="8" cx="10" cy="10" fill="none" stroke-width="4" stroke="#45DAA1"/>
        </svg>
      </div>`;
			},
			clickable: "true",
		},
		on: {
			init: function () {
				const _self = this;
				_self.el.style.setProperty("--delay", _self.params.autoplay.delay);
			},
		},
	});
	const news = new Swiper(".news__slider", {
		speed: 1200,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		slidesPerView: 3,
		spaceBetween: 33,
		modules: [Navigation, Pagination, Autoplay],
		navigation: {
			nextEl: ".news__next",
		},
		pagination: {
			el: ".news__pagination",
			clickable: "true",
		},
		watchSlidesProgress: true,
		on: {
			init: function () {
				// alert(news.slides.length);
			},
		},
	});
	news.on("slideChange", function () {
		current.textContent = news.realIndex + 1;
	});
	document.addEventListener(
		"mouseenter",
		event => {
			const el = event.target;
			if (el && el.matches && el.matches(".swiper-container")) {
				// console.log('mouseenter');
				// console.log('autoplay running', swiper.autoplay.running);
				el.swiper.autoplay.stop();
				el.classList.add("swiper-paused");

				const activeNavItem = el.querySelector(
					".swiper-pagination-bullet-active"
				);
				activeNavItem.style.animationPlayState = "paused";
			}
		},
		true
	);

	document.addEventListener(
		"mouseleave",
		event => {
			// console.log('mouseleave', swiper.activeIndex, swiper.slides[swiper.activeIndex].progress);
			// console.log('autoplay running', swiper.autoplay.running);
			const el = event.target;
			if (el && el.matches && el.matches(".swiper-container")) {
				el.swiper.autoplay.start();
				el.classList.remove("swiper-paused");

				const activeNavItem = el.querySelector(
					".swiper-pagination-bullet-active"
				);

				activeNavItem.classList.remove("swiper-pagination-bullet-active");
				// activeNavItem.style.animation = 'none';

				setTimeout(() => {
					activeNavItem.classList.add("swiper-pagination-bullet-active");
					// activeNavItem.style.animation = '';
				}, 10);
			}
		},
		true
	);
});

AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
	initClassName: "aos-init", // class applied after initialization
	animatedClassName: "aos-animate", // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 800, // values from 0 to 3000, with step 50ms
	easing: "ease", // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

// const swiperBanner = new Swiper('.swiper-banner', {
//   loop: true,
//   speed: 750,
//   modules: [Navigation, Pagination],
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: 'true',
//   },
// });
