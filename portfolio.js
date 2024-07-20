let menu = document.querySelector('.hamburger');
menu.addEventListener('click', function () {
  let navMenu = document.querySelector(".nav-box");
  navMenu.classList.toggle("show");
});

// Close the nav-box when a link is clicked
document.querySelectorAll('.nav-box ul li a').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector(".nav-box").classList.remove("show");
  });
});
