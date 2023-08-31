'use-strict'

const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const navBar = document.querySelector('.nav-bar');
const bar = document.getElementById('bar');
const close = document.getElementById('close');


  bar.addEventListener('click',() => {
    navBar.style.transform = 'translateX(-0px)';
  });

  close.addEventListener('click',() => {
    navBar.style.transform = 'translateX(300px)';
  });




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







// const navHeight = nav.getBoundingClientRect().height;
// const stickyNav = function (entries) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });
// headerObserver.observe(header);