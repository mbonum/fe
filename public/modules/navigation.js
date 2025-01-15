document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');
  const hamburgerPath = document.querySelector('.hamburger-path');

  hamburgerMenu.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    hamburgerMenu.classList.toggle('open');

    if (isOpen) {
      // Change to 'X' icon
      hamburgerPath.setAttribute(
        'd',
        'M6 6L18 18M6 18L18 6'
      );
    } else {
      // Hamburger icon
      hamburgerPath.setAttribute(
        'd',
        'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
      );
    }
  });
});