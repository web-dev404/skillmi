import * as flsFunctions from "./modules/functions.js";
import Swiper from "swiper";
import {
	Navigation,
	Pagination,
	EffectFade,
	Autoplay,
	Scrollbar,
} from "swiper";
import smoothScroll from "./modules/smooth-scroll.js";
import AOS from "aos";
import LazyLoad from "vanilla-lazyload";
let lazyLoadInstance = new LazyLoad({});
flsFunctions.isWebp();
window.addEventListener("load", event => {
	const current = document.querySelector(".news__current");
	const max = document.querySelector(".news__max");
	const nav = document.querySelector(".header__nav");
	const burger = document.querySelector(".header__burger");
	burger &&
		burger.addEventListener("click", e => {
			burger.classList.toggle("header__burger_active");
			if (burger.classList.contains("header__burger_active")) {
				nav.closest(".header__row").classList.add("header__row_active");
				nav.classList.add("header__nav_active");
			} else {
				nav.closest(".header__row").classList.remove("header__row_active");
				nav.classList.remove("header__nav_active");
			}
		});
	let header = document.querySelector(".header");
	let more = document.querySelector(".courses__more-mob");
	more &&
		more.addEventListener("click", () => {
			document
				.querySelector(".courses__more-content")
				.classList.add("courses__more-content_active");
			more.closest(".courses__more-mob").remove();
		});
	function checkFixed() {
		if (window.pageYOffset > 700) {
			header.classList.add("header-fixed");
		} else {
			header.classList.remove("header-fixed");
		}
	}
	header &&
		window.addEventListener("scroll", () => {
			checkFixed();
		});
	const first = new Swiper(".first-screen__slider", {
		loop: true,
		speed: 1200,
		slidesPerView: "auto",
		centeredSlides: true,
		spaceBetween: 6,
		modules: [Navigation, Pagination, Autoplay, Scrollbar],
	});
	const courses = new Swiper(".courses-content__slider", {
		effect: "fade",
		autoplay: {
			delay: 5000,
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
	const benefits = new Swiper(".benefits__slider", {
		speed: 1200,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		slidesPerView: 1,
		spaceBetween: 15,
		modules: [Navigation, Pagination, Autoplay, Scrollbar],
		navigation: {
			nextEl: ".benefits__next-btn",
		},
		breakpoints: {
			700: {
				slidesPerView: 2,
			},
		},
		scrollbar: {
			el: ".swiper-scrollbar",
		},
		watchSlidesProgress: true,
	});
	const news = new Swiper(".news__slider", {
		speed: 1200,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		slidesPerView: 1,
		spaceBetween: 10,
		modules: [Navigation, Pagination, Autoplay],
		navigation: {
			nextEl: ".news__next",
		},
		pagination: {
			el: ".news__pagination",
			clickable: "true",
		},
		watchSlidesProgress: true,
		breakpoints: {
			700: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1100: {
				slidesPerView: 3,
				spaceBetween: 27,
			},
		},
	});
	const newsMob = new Swiper(".news-content__slider", {
		speed: 1200,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 10,
		modules: [Navigation, Pagination, Autoplay],
		navigation: {
			nextEl: ".news__next",
		},
		breakpoints: {
			900: {
				slidesPerView: 5,
				spaceBetween: 7,
			},
			700: {
				slidesPerView: 2,
				spaceBetween: 7,
			},
		},
		watchSlidesProgress: true,
	});
	news.on("slideChange", function () {
		current.textContent = news.realIndex + 1;
		if (window.innerWidth <= 700) max.textContent = 6;
		else if (window.innerWidth <= 900) max.textContent = 5;
		else max.textContent = 4;
	});
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
