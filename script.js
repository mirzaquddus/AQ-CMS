document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const slides = document.querySelectorAll(".slider img");

    function changeSlide() {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
        index = (index + 1) % slides.length;
    }

    setInterval(changeSlide, 3000); // Change image every 3 seconds
});
