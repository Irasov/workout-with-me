const icon = document.querySelector('.header__icon');
const nav = document.querySelector('.header__nav');
if (icon) {
  icon.addEventListener('click', () => {
    document.body.classList.toggle('_lock');
    nav.classList.toggle('_active');
    icon.classList.toggle('_active');
  });
}
