const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#main-menu');

toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

menu.addEventListener('click', (event) => {
  if (!event.target.closest('a')) return;
  menu.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
});
