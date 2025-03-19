function showForm() {
    let form = document.getElementById("partnerForm");
    form.classList.remove("hidden");
}

function generate3DModel() {
    alert("3D Model Generator Coming Soon!");
}

// Shopping Cart Logic
let cart = [];

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(itemName + " added to cart!");
}

// Form Submission Handling
document.getElementById("partnerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you! Your request has been submitted.");
});
