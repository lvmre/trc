window.addEventListener("load", function () {
  var preloader = document.querySelector(".preloader");
  var loadingBar = preloader.querySelector(".loading-bar");

  loadingBar.style.width = "100%";
  setTimeout(function () {
    preloader.style.display = "none";
  }, 2000);
});