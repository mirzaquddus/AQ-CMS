document.getElementById("house-form").addEventListener("input", function () {
  let length = document.getElementById("length").value;
  let width = document.getElementById("width").value;
  let area = length * width || 0;
  document.getElementById("total-area").textContent = area;
});

// Auto-slide for images
const slides = document.querySelector(".slides");
let index = 0;

function nextSlide() {
  index = (index + 1) % 3;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(nextSlide, 5000);
