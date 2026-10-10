let cartCount = 0;

function addToCart() {

    cartCount++;

    document.getElementById("cart-count").innerText = cartCount;

    alert("Product added to cart!");
}

function showCart() {

    if (cartCount === 0) {
        alert("Your cart is empty.");
    } else {
        alert("You have " + cartCount + " item(s) in your cart.");
    }
}

function contactMessage() {

    alert("Thank you for contacting Step Style!");
}