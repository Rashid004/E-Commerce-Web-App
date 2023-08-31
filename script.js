'use-strict'

const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const navBar = document.querySelector('.nav-bar');
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const pro = document.querySelector('.pro');

// For mobile responsive
const hamBurger = () => {
  bar.addEventListener('click',() => {
    navBar.style.transform = 'translateX(-0px)';
  });
  close.addEventListener('click',() => {
    navBar.style.transform = 'translateX(300px)';
  });
};
hamBurger();

pro.onclick = () => {
  window.location.href = "./product.html";
};
  


// Sticky Nav
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function(entries) {
 const [entry] = entries;

 if(!entry.isIntersecting)
 nav.classList.add('sticky');
 else 
  nav.classList.remove('sticky');
}


const headerObsever = new IntersectionObserver(stickyNav,{
 root:null,
 threshold:0,
 rootMargin: `${navHeight}px`,
});
headerObsever.observe(header);


// Carousel (Slider) in product details

const smallImg = document.querySelectorAll(".small-img");
const mainImg = document.querySelector(".main-img");

// Old Method

// smallImg[0].onclick = function() {
//   mainImg.src = smallImg[0].src
// }
// smallImg[1].onclick = function() {
//   mainImg.src = smallImg[1].src
// }
// smallImg[2].onclick = function() {
//   mainImg.src = smallImg[2].src
// }
// smallImg[3].onclick = function() {
//   mainImg.src = smallImg[3].src
// }
smallImg.forEach((img, index) => {
  img.onclick = () => {
    mainImg.src = img.src;
  };
});
