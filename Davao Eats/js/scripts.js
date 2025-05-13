// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Filter Restaurants Based on Search Input
  function filterRestaurants() {
    const searchInput = document.querySelector('.search-bar input').value.toLowerCase();
    const restaurantButtons = document.querySelectorAll('.gallery .image-button');

    // Loop through all restaurant buttons and toggle visibility based on search input
    restaurantButtons.forEach(button => {
      const restaurantName = button.querySelector('.info-text h2').textContent.toLowerCase();
      if (restaurantName.includes(searchInput)) {
        button.style.display = 'flex'; // Show button if it matches the search input
      } else {
        button.style.display = 'none'; // Hide button if it doesn't match
      }
    });
  }

  // Add Event Listener to Search Button
  const searchButton = document.querySelector('.search-bar button');
  const searchBar = document.querySelector('.search-bar input');

  if (searchButton && searchBar) {
    // Trigger search when the search button is clicked
    searchButton.addEventListener('click', filterRestaurants);

    // Trigger search when the "Enter" key is pressed
    searchBar.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        filterRestaurants();
      }
    });
  }

  // Restaurant Button Functionality
  const imageButtons = document.querySelectorAll('.image-button');
  imageButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Redirect to the href attribute of the button
      const link = button.getAttribute('href');
      if (link) {
        window.location.href = link;
      }
    });
  });

  // Optional: Arrow button functionality (left and right)
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');
  const imageContainer = document.querySelector('.gallery .row');

  if (leftArrow && rightArrow && imageContainer) {
    leftArrow.addEventListener('click', () => {
      imageContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
      imageContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });
  }
});