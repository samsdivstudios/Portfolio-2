function toggleMenu(btn) {
  const menu = document.getElementById('menu');
  const isOpen = menu.classList.toggle('show');
  btn.classList.toggle('change', isOpen);
  btn.setAttribute('aria-expanded', isOpen);
}
