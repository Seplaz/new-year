document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector('.gift__button');
  const giftImage = document.querySelector('.gift__image');
  const giftText = document.querySelector('.gift__text');

  button.addEventListener("click", (event) => {
  const elem = event.target;
  elem.classList.add('clicked');

  setTimeout(() => {
  elem.classList.remove('clicked');
  }, 400);

  giftImage.classList.add('visible');
  giftText.classList.add('visible');
  button.style.display = 'none';
  });
 });