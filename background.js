const body = document.querySelector("body");

function showImage(num) {
  const image = new Image();
  image.src = `Images/${num + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function getRandom() {
  const imgNum = Math.floor(Math.random() * 3);
  return imgNum;
}

function init() {
  const randomNum = getRandom();
  showImage(randomNum);
}

init();
