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
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});

//AutoPlay 컨트롤
function controlAutoPlay() {
  if (swiperPromotion.autoplay.running === false) {
    swiperPromotion.autoplay.start();
  } else {
    swiperPromotion.autoplay.stop();
  }
}

//Toggle Promotion
const promotionSection = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".notice .toggle-promotion");

promotionToggleBtn.addEventListener("click", function () {
  if (promotionSection.classList.contains("hide")) {
    promotionSection.classList.remove("hide");
    promotionToggleBtn.classList.add("show");
  } else {
    promotionSection.classList.add("hide");
    promotionToggleBtn.classList.remove("show");
  }
});

//애니메이션 파트
// Visual
window.onload = function () {
  const visualSection = document.querySelector(".visual");
  visualSection.classList.add("animate");
};

//애니메이션 스크롤 파트
//엘사바도르
window.addEventListener("scroll", function () {
  if (window.scrollY > 264) {
    const elsalvadorSection = document.querySelector(".elsalvador");
    elsalvadorSection.classList.add("animate");
  }
});

//에티오피아
window.addEventListener("scroll", function () {
  // console.log(scrollY);
  if (window.scrollY > 765) {
    const ethiopiaSection = document.querySelector(".ethiopia");
    ethiopiaSection.classList.add("animate");
  }
});

//Favorite
window.addEventListener("scroll", function () {
  // console.log(scrollY);
  if (window.scrollY > 1050) {
    const favoriteSection = document.querySelector(".favorite");
    favoriteSection.classList.add("animate");
  }
});

//MAGAZINE
window.addEventListener("scroll", function () {
  // console.log(scrollY);
  if (window.scrollY > 1860) {
    const magazineSection = document.querySelector(".magazine");
    magazineSection.classList.add("animate");
  }
});

//FIND STORE
window.addEventListener("scroll", function () {
  // console.log(scrollY);
  if (window.scrollY > 2370) {
    const storeSection = document.querySelector(".store");
    storeSection.classList.add("animate");
  }
});
