function menuToggle() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").classList.add('active');
  } else {
    document.getElementById("header").classList.remove('active')
  }
}
