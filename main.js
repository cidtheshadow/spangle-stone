// Intersection Observer for Reveal Animations
const revealOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, revealOptions);

// Target all reveal elements
document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

// Scroll Event for Navigation
const mainNav = document.getElementById('main-nav');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll > 100) {
    mainNav.classList.add('nav-scrolled');
    // Hide nav on scroll down, show on scroll up
    if (currentScroll > lastScrollTop) {
      mainNav.style.transform = 'translateY(-100%)';
    } else {
      mainNav.style.transform = 'translateY(0)';
    }
  } else {
    mainNav.classList.remove('nav-scrolled');
    mainNav.style.transform = 'translateY(0)';
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

console.log('Spangle Stone Luxury Website Initialized. A Bespoke Experience.');
