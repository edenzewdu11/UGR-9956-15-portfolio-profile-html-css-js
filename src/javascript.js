document.getElementById('dark-mode-toggler').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class
});
document.getElementById('menu-toggler').addEventListener('click', function() {
    var navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');  // Toggle the visibility of the nav menu
});
