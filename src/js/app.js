import * as flsFunctions from './modules/functions.js';
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade, Thumbs } from 'swiper';
import smoothScroll from './modules/smooth-scroll.js';

flsFunctions.isWebp();

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