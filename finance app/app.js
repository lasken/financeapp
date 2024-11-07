window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  })
})
const menu = document.querySelector('#mobile-menu')
const menulinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menulinks.classList.toggle('active');
});