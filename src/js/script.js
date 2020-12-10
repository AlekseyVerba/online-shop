import ion from "./plugin/ion.rangeSlider";
import style from "./plugin/jquery.formstyler";
import slider from "./moduls/slider";
import tabs from "./moduls/tabs";
import toggleClass from "./moduls/toggleClass";
// slider(".banner__slide-item", ".banner__slide", ".banner__slide-inner", ".banner__slide-left", ".banner__slide-right", true);
// slider(".product__content",)
// for (let i = 0; i < 12; i++) {
//     slider(".product__box", `[data-slide="${i}"]`, ".product__carusel", ".product__left", ".product__right");
// }
// // console.log(document.querySelector(`[data-slide="${1}"]`));

// // const allWrap = document.querySelectorAll("[data-slide]").forEach(item())
// // tabs(".search__tabs-item", ".search__content-item", "search__tabs-item-active");
// tabs("[data-one]", "[data-one-content]","product__tab-active");
// tabs(".popular__tab", ".popular__content","product__tab-active");
toggleClass(".product__item-forever", "product__item-forever-active");
tabs(".magazine__left-tab", ".magazine__left-content", "magazine__left-tab-active");