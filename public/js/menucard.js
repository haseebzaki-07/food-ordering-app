let cartItems = [];

document.addEventListener("DOMContentLoaded", function() {
  // Add event listener for clicks on Add to Cart buttons
  document.getElementById("menu").addEventListener("click", function(event) {
    if (event.target.classList.contains("add-to-cart")) {
      addToCart(event.target);
    }
  });
});

function addToCart(button) {
    let menuItem = button.parentElement;
    let itemName = menuItem.dataset.name;
    let itemPrice = parseFloat(menuItem.dataset.price);

    // Add item to the cart
    cartItems.push({ name: itemName, price: itemPrice });

    // Update the cart display
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById('cart-list');
    let totalElement = document.getElementById('total');
    let total = 0;

    // Clear the cart list
    cartList.innerHTML = '';

    // Populate the cart list
    cartItems.forEach(item => {
        let listItem = document.createElement('li');
        listItem.className = 'cart-item';
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);

        // Calculate the total
        total += item.price;
    });

    // Update the total amount
    totalElement.textContent = total.toFixed(2);
}