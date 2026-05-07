// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');

if(hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon if using FontAwesome or simple HTML symbol
    if(navLinks.classList.contains('active')) {
      hamburger.innerHTML = '✕';
    } else {
      hamburger.innerHTML = '☰';
    }
  });
}

// Highlight active link
const currentLocation = location.pathname.split('/').pop() || 'index.html';
const navItems = document.querySelectorAll('nav ul li a');

navItems.forEach(item => {
  const itemPath = item.getAttribute('href');
  if(itemPath === currentLocation) {
    item.classList.add('active');
  } else {
    item.classList.remove('active');
  }
});

// Subtle element reveal on scroll
const revealElements = document.querySelectorAll('.card, .timeline-item, .cert-card');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const elementVisible = 150;
  
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Set initial state for reveal elements
revealElements.forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(30px)';
  element.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load
setTimeout(revealOnScroll, 100);
