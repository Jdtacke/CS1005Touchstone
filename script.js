
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


// Get all buttons with the class 'gallery_add_to_cart'
const addToCartButtons = document.querySelectorAll('.gallery_add_to_cart');
  
// Loop through each button
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the parent .gallery_cards element of the clicked button
    const parentCard = button.closest('.gallery_cards');
    
    // Get the text inside the <h5> tag of the parent card
    const itemName = parentCard.querySelector('h5').textContent;
    
    // Show an alert with the item name
    alert(itemName + ' has been added to your cart!');
  });
});