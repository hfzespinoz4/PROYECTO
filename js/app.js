const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav= document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links  li');
 
    burger.addEventListener('click', () => {
      // toggle nav
        nav.classList.toggle('nav-active');

     //Animate links
       navLinks.forEach((link, index) => {
            if (link.style.animation) {
               link.style.animation = '';
            } else {
                  link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+ 0.1}s`;
            }
        });
        //Burger animation
        burger.classList.toggle('toggle');
    });
} 
navSlide();

//Carga del slde del Main Page
const services = [
  'Soluciones IT a su medida',
  'Infraestructura y Servicios de Alta Disponibilidad',
  'Soluciones de Retail',
]

const images = [
  './media/bn-it.jpg',
  './media/bn-nube.jpg',
  './media/bn-retail.jpg',
]

const promos = [
  'Tenemos la solución para cada reto tecnologico de su empresa',
  'Tu empresa segura y accesible desde cualquier lugar',
  'Software, Servicios y Asesoría para el sector retail',
]

let currentSlide = 0;
const image = document.querySelector('#banner-images');
const promo = document.querySelector('#serv-description');
const serv = document.querySelector('#h1');
image.setAttribute('src', images[currentSlide]);
serv.innerHTML = services[currentSlide];
promo.innerHTML = promos[currentSlide];

const updateBanner = () => {
    console.log(currentSlide);
    if ((currentSlide +1) < images.length ){
        currentSlide = currentSlide + 1;
    } else {
        currentSlide = 0;
    }
    console.log(currentSlide);
    image.setAttribute('src', images[currentSlide]);
    serv.innerHTML = services[currentSlide];
    promo.innerHTML = promos[currentSlide];
};

window.setInterval(updateBanner, 5000);

updateBanner();