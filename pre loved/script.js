// document.addEventListener("DOMContentLoaded", () => {
//     const cartButtons = document.querySelectorAll('.add-to-cart');

//     cartButtons.forEach(button => {
//         button.addEventListener('click', (event) => {
//             const product = event.target.closest('.product'); // Find the parent product div
//             const productName = product.querySelector('h3').textContent; // Get product name
//             const productPrice = product.querySelector('p').textContent; // Get product price
            
//             alert(`${productName} (${productPrice}) added to cart!`);
//         });
//     });
// });
// document.addEventListener("DOMContentLoaded", () => {
//     const cartButtons = document.querySelectorAll('.add-to-cart');
//     const cartList = document.querySelector('.cart-items');
//     const cartContainer = document.querySelector('.cart-container');
//     const cartBtn = document.querySelector('.cart-btn');

//     // Hide the cart initially
//     cartContainer.style.display = "none";

//     // Toggle cart visibility when clicking "Cart" button
//     cartBtn.addEventListener("click", () => {
//         cartContainer.style.display = cartContainer.style.display === "none" ? "block" : "none";
//     });

//     cartButtons.forEach(button => {
//         button.addEventListener('click', (event) => {
//             const product = event.target.closest('.product');
//             const productName = product.querySelector('h3').textContent;
//             const productPrice = product.querySelector('p').textContent;

//             // Create a cart item
//             const cartItem = document.createElement('li');
//             cartItem.textContent = `${productName} - ${productPrice}`;

//             // Add to cart list
//             cartList.appendChild(cartItem);
//         });
//     });
// });
// function changeColor() {
//     // Generate a random color
//     const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = randomColor;
// }
