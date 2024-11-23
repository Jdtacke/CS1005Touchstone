
const subscribeButton = document.getElementById('subscribeButton');

  // Add an event listener for the click event
  subscribeButton.addEventListener('click', function() {
    // Get the email input value
    const email = document.getElementById('email').value;

    // Show an alert with a message
    if (email) {
      alert(`Thank you for subscribing! We'll send updates to ${email}.`);
    } else {
      alert('Please enter a valid email address.');
    }
  });


document.addEventListener("DOMContentLoaded", () => {
  const cart = []; // Array to store cart items
  const addToCartButtons = document.querySelectorAll('.gallery_add_to_cart');
  const viewCartButton = document.getElementById('gallery_viewcart');

  // Add item to cart
  addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const parentCard = button.closest('.gallery_cards');
      const itemName = parentCard.querySelector('h5').textContent;

      cart.push(itemName); // Add item to cart array
      alert(`${itemName} has been added to your cart!`);
    });
  });

  // View cart functionality
  viewCartButton.addEventListener('click', () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Display cart items in an alert with options
    const cartItems = cart.join('\n');
    const userChoice = confirm(`Your cart contains:\n${cartItems}\n\nClick OK to process order or Cancel to clear the cart.`);

    if (userChoice) {
      // Process order
      alert("Thank you for your order!");
      cart.length = 0; // Clear the cart
    } else {
      // Clear the cart
      alert("Your cart is empty");
      cart.length = 0; // Clear the cart
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  // Select form elements
  const submitButton = document.getElementById("about_us_submit");
  const clearButton = document.getElementById("about_us_clear_form");
  const formInputs = document.querySelectorAll("form input");

  // Event listener for submit button
  submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Thank you for your message");
  });

  // Event listener for clear form button
  clearButton.addEventListener("click", (e) => {
      e.preventDefault();
      formInputs.forEach(input => input.value = ""); // Clear all input fields
  });
});