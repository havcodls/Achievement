window.addEventListener('scroll', function(){
    let navbar = document.getElementById('navbar');
    let sec1 = document.getElementById('sec1');
    let sec1Top = sec1.offsetTop;

    if (window.pageYOffset >= sec1Top) {
        navbar.classList.add('black-navbar');
    } else {
        navbar.classList.remove('black-navbar');
    }
});

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
});
