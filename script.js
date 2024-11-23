
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

  
 // "Add to Cart" button for Group Kickboxing
 const gallery_add_to_cart = document.getElementById('gallery_add_to_cart');
    gallery_add_to_cart.addEventListener('click', function() {
        alert('Group Kickboxing has been added to your cart!');
 });

// "Add to Cart" button for Group Pilates
const addToCartButton = document.getElementById('gallery');

addToCartButton.addEventListener('click', function() {
  alert('Group Pilates has been added to your cart!');
});




// "Add to Cart" button for Group Pilates
const group = document.getElementById('group');

group.addEventListener('click', function() {
  alert('Group Yoga has been added to your cart!');
});
