//  const hamburger = document.getElementById('hamburger');
//  const navlist = document.getElementById('nav-list');

//  hamburger.addEventListener('click', () => {
//      navLIST,classlist.toggle('show');
//  });

const menuIcon = document.querySelector
('hamburger-menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle("change");
})