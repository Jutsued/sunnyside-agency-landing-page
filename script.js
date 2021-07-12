const toggleBtn = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleBtn.addEventListener('click', function (){
  navbarLinks.classList.toggle('active')
});

