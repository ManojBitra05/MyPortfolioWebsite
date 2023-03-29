// Smooth scrolling on anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar toggle on mobile
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});

// Projects filter
const projectFilterButtons = document.querySelectorAll('.project-filter-btn');
const projectItems = document.querySelectorAll('.project-item');

projectFilterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    projectFilterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    projectItems.forEach(item => {
      item.style.display = 'none';

      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      }
    });
  });
});

// Scroll reveal animation
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '20px',
  duration: 1000,
  delay: 200,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  reset: true
});

sr.reveal('.section-title', { delay: 400 });
sr.reveal('.section-subtitle', { delay: 600 });
sr.reveal('.project-item', { delay: 200 }, 100);
sr.reveal('.contact-form', { delay: 400 });
