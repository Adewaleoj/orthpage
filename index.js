
const btnScrollTo = document.querySelector('#scroled');

const section1 = document.querySelector('#scrol');

btnScrollTo.addEventListener('click', function (e) {
  
section1.scrollIntoView({ behavior: 'smooth' });

});



const menu = document.querySelector('#mobile-menu')
 const menuLinks =document.querySelector(".navbar__menu")

 menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
 })


 const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.navbar__btn');

const nav = document.querySelector('.nav')

const section11 = document.querySelector('#section--1')


const openModal = function (e) {
    e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));



btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4) {
        counter =1;
    }
}, 5000);

document.querySelector('.navbar__menu').addEventListener
('click', function (e) {
  e.preventDefault();
if (e.target.classList.contains('navbar__links')) {
  const id = e.target.getAttribute('href');
  document.querySelector(id).scrollIntoView({
      behavior: 'smooth'});
}
});


const imgTargets = document.querySelectorAll('img[data-src]');

const loading = function (entries, observer) {
  const [entry] = entries;
  
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;

entry.target.addEventListener('load', function () {
  entry.target.classList.remove('lazy-img');
});
observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loading, {
  root: null,
  threshold: 0,
  rootMargin: '-100px',
});

imgTargets.forEach(img => imgObserver.observe(img));


const tabs = document.querySelectorAll('.operations__tab');

const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  
if (!clicked) return;
tabs.forEach(t => t.classList.remove('operations__tab--active'));

tabs.forEach(t => t.classList.remove('operations__tab--active'));
tabsContent.forEach(c => c.classList.remove('operations__content--active'));
 clicked.classList.add('operations__tab--active'); 

document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});


const allSections = document.querySelectorAll('.sectored');

const revealSection = function(entries, observer) {
  const [entry] = entries;
  

if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  
};

const sectionObserver  = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});


var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
})