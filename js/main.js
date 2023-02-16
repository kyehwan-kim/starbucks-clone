//MAIN HEADER
//SEARCH

//범위 좁혀서 선택하기
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
// const searchIconEl = searchEl.querySelector("span");

// let isNotSearchClick = false;

// document.addEventListener("click", function (e) {
//   if (e.target.classList.contains("material-symbols-outlined")) {
//     isNotSearchClick = true;
//   } else {
//     isNotSearchClick = false;
//   }
// });

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

//돋보기 클릭하면 통합검색창 뜨게하기
searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합 검색");
});

//통합검색창 외부에서 클릭하면 다시 좁혀지기
searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
});

//SWIPER
//SWIPER NOTICE
const swiperNotice = new Swiper(".notice .notice-line .inner .inner__left .swiper", {
  direction: "vertical",
  loop: true,
  autoplay: true,
});

//SWIPER PROMOTION
const swiperPromotion = new Swiper(".notice .promotion .swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
});
