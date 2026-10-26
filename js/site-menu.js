document.addEventListener('DOMContentLoaded', function () {
  const navWrap = document.querySelector('.nav-wrap');
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');

  if (!navWrap || !navToggle || !nav) return;

  const closeMenu = function () {
    navWrap.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  navToggle.addEventListener('click', function () {
    const isOpen = navWrap.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', function (event) {
    if (!navWrap.contains(event.target)) closeMenu();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu();
      navToggle.focus();
    }
  });
});
