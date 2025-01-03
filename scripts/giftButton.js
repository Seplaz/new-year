const today = new Date();
const targetDate = new Date(2025, 0, 1);

function isButtonEnabled() {
  return today >= targetDate;
}

window.onload = function() {
  const button = document.getElementById('gift__button');
  button.disabled = !isButtonEnabled();
};

setInterval(function() {
  if (isButtonEnabled()) {
    document.getElementById('gift__button').disabled = false;
  }
}, 1000);

document.addEventListener("DOMContentLoaded", () => {
  const giftButton = document.querySelector(".gift__button");
  const giftImage = document.querySelector(".gift__image");
  const giftBackground = document.querySelector(".gift__background");
  const giftText = document.querySelector(".gift__text");

  const imagePaths = [
    "./images/gift_monkey.svg",
    "./images/gift_1.svg",
    "./images/gift_2.svg",
    "./images/gift_3.svg",
  ];

  giftButton.addEventListener("click", (event) => {
    const elem = event.target;
    elem.classList.add("clicked");

    setTimeout(() => {
      elem.classList.remove("clicked");
    }, 400);

    const randomImage = imagePaths[Math.floor(Math.random() * imagePaths.length)];
    giftImage.src = randomImage;
    giftImage.classList.add("visible");
    giftBackground.classList.add("visible");
    giftText.style.display = "none";
    giftButton.style.display = "none";
  });
});
