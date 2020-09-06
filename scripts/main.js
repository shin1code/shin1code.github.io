let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
mainNav.classList.toggle("active");
});

    document.querySelectorAll('.nav-links').forEach(item => {
        item.addEventListener('click', event => {
            mainNav.classList.toggle("active");
        })
      })
