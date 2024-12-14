const imageElements = document.querySelectorAll('.auto-change-image');
const imageUrls = [ '/public/image/demon1.png', '/public/image/haikyu.png', '/public/image/narotu1.png', '/public/image/dragon1.png'];
let currentIndex = 0;

function changeImages() {
  imageElements.forEach((image) => {
    image.src = imageUrls[currentIndex];
    image.style.transition = 'opacity 0.5s ease-in-out';
  });
  currentIndex = (currentIndex + 1) % imageUrls.length;
}

setInterval(changeImages, 2000);