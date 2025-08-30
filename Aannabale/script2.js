const images = document.querySelectorAll('.rotating-image');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000);

setTimeout(function() {
    parent.postMessage({ type: 'navigate', page: 'page3.html' }, '*');
}, 10000);