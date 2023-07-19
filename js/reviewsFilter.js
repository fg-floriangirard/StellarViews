/**
 * Object representing the filter functionality to handle filtering of reviews based on ratings.
 */
const reviewsFilter = {
  /**
   * Initialize the reviews filter by setting up event listeners on rating checkboxes.
   * @returns {void}
   */
  init : function() {
      // Select all input elements with class 'filter' representing the rating checkboxes.
      const ratingCheckboxes = document.querySelectorAll('.filter input');
      // Attach a click event listener to each rating checkbox to handle user interactions.
      for (const checkBox of ratingCheckboxes) {
          checkBox.addEventListener('click', reviewsFilter.handleClickOnRatingCheckbox);
      }
  },
  
  /**
   * Handles the click event on a rating checkbox to trigger review filtering.
   * 
   * @param {Event} event - The click event object.
   * @returns {void}
   */
  handleClickOnRatingCheckbox : function(event) { 
      const ratingCheckbox = event.target;
      const rating = ratingCheckbox.value;
      // Call the 'toggleReviewsFromRating' function to show/hide reviews of the selected rating.
      reviewsFilter.toggleReviewsFromRating(rating);
  },
  
  /**
   * Shows/hides reviews based on the selected rating.
   * 
   * @param {string} rating - The rating value to filter reviews.
   * @returns {void}
   */
  toggleReviewsFromRating : function (rating) {
      // Select all review elements with a matching 'data-rating' attribute equal to the given rating.
      const reviewsToFilter = document.querySelectorAll('.review[data-rating="'+rating+'"]');
      // Toggle the visibility of each review element with the matching rating value.
      for (const reviewElement of reviewsToFilter) {         
          reviewElement.classList.toggle('review--hidden');
      }
  }
}

reviewsFilter.init();