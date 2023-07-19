/**
 * Object representing the articles functionality for managing likes and displaying an error message.
 */
const articles = {

  /**
   * Initializes the 'articles' object by adding click event listeners to all 'like' buttons.
   * When a 'like' button is clicked, the 'handleLikeClick' function is called.
   */
  init : function() {
        const likeButton = document.querySelectorAll('.btn__like');
        for (const currentLike of likeButton) {
            currentLike.addEventListener('click', articles.handleLikeClick);
        }
    },

  errorMessage : "You must be logged in to manage your favorites",

  /**
   * Handles the click event for 'like' buttons.
   * This function finds the parent 'article' element, removes any existing error messages,
   * and displays the 'errorMessage' at the top of the article.
   *
   * @param {Event} event - The click event object.
   */
  handleLikeClick : function (event) {
      const allArticle = event.target.closest('.card');
      const oldMessages = allArticle.querySelectorAll('.message');

      // Remove any existing error messages before displaying the new one.
      for (const oldMessage of oldMessages) {
          oldMessage.remove();
      }
      // Create a new error message element and add it to the top of the article.
      const errorMessage = document.createElement('p');
      errorMessage.classList.add('message');
      errorMessage.textContent = articles.errorMessage;
      allArticle.prepend(errorMessage);
  }
}
