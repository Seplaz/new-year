document.addEventListener("DOMContentLoaded", () => {
  const giftButton = document.querySelector(".gift__button");
  const giftImage = document.querySelector(".gift__image");
  const giftText = document.querySelector(".gift__text");

  const imagePaths = [
    "./images/gift_monkey.png",
    "./images/gift_baton.png",
    "./images/gift_noski.png",
    "./images/gift_airpods.png",
    "./images/gift_baton.png",
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
    giftText.style.display = "none";
    giftButton.style.display = "none";
  });
});