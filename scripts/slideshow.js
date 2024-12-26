const mirazhImages = [
  "./images/posidelki.webp",
  "./images/mirazh_1.webp",
  "./images/mirazh_2.webp",
];

let currentMirazhImage = 0;

function changeMirazhImage() {
  document.getElementById("mirazh").src = mirazhImages[currentMirazhImage];
  currentMirazhImage++;
  if (currentMirazhImage >= mirazhImages.length) {
    currentMirazhImage = 0;
  }
  setTimeout(changeMirazhImage, 5000);
}

changeMirazhImage();

const baikalImages = [
  "./images/kater.webp",
  "./images/baikal_1.webp",
  "./images/baikal_2.webp",
];

let baikalImage = 0;

function changeBaikalImage() {
  document.getElementById("baikal").src = baikalImages[baikalImage];
  baikalImage++;
  if (baikalImage >= baikalImages.length) {
    baikalImage = 0;
  }
  setTimeout(changeBaikalImage, 5000);
}

changeBaikalImage();
