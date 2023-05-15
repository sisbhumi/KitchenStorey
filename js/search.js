// Get the search input field and search button
const $searchInput = $('#search-input');
const $searchBtn = $('#search-btn');

// Get all the items
const $items = $('.item');

// Add event listener to the search button
$searchBtn.on('click', () => {
  const searchTerm = $searchInput.val().toLowerCase();
  
  // Loop through all the items and hide/show them based on search term
  $items.each(function() {
    const name = $(this).find('.item-name').text().toLowerCase();
    
    if (name.includes(searchTerm)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});

// Clear the search input field when the user clicks on it
$searchInput.on('click', () => {
  $searchInput.val('');
  
  // Show all the items again
  $items.show();
});
 