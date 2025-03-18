// Toggle Chat Box
document.getElementById('chat-button').addEventListener('click', function () {
  const chatBox = document.getElementById('chat-box');
  chatBox.classList.toggle('hidden');
});

// Slideshow Animation (Optional)
const slides = document.querySelector('.slides');
let currentSlide = 0;

function nextSlide() {
  currentSlide = (currentSlide + 1) % 3;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds
