let totalPrice = 0;

function updatePrice(input, price) {
    const quantity = parseInt(input.value);
    const itemTotal = quantity * price;

    // Update total price in the cart
    const cartTotal = document.getElementById('total-price');
    cartTotal.textContent = totalPrice + itemTotal;
}

function addToCart(name, price, quantityId) {
    const quantityInput = document.getElementById(quantityId);
    const quantity = parseInt(quantityInput.value);
    
    if (quantity > 0) {
        const cartItems = document.getElementById('cart-items');
        const itemTotal = quantity * price;

        // Add to cart
        const item = document.createElement('div');
        item.textContent = `${name} x ${quantity} - ${itemTotal} INR`;
        cartItems.appendChild(item);

        // Update total price
        totalPrice += itemTotal;
        document.getElementById('total-price').textContent = totalPrice;
    } else {
        alert("Please select a quantity.");
    }
}
