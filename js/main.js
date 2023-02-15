//MAIN HEADER
//SEARCH

//범위 좁혀서 선택하기
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

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
