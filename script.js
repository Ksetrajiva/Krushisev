
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}


// Function to add product to cart
function addToCart() {
    // Get product details
    const productName = "Cameras";  // Use the actual name of the product
    const productPrice = 5000;      // Product price
    const productQuantity = document.querySelector("input[type='number']").value || 1; // Get quantity from input

    // Create product object
    const product = {
        name: productName,
        price: productPrice,
        quantity: productQuantity
    };

    // Get current cart from localStorage or initialize as an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new product to the cart array
    cart.push(product);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optionally, alert the user that the item was added
    alert(`${productName} has been added to your cart.`);
}


