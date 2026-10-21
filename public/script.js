const btn = document.querySelector('.menu');
const list = document.getElementById('nav-list');
btn.addEventListener('click', () => {
  const open = list.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
list.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    list.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }
});
