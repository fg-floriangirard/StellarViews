/** 
 * This theme object provides functionalities to dynamically switch between light and dark themes,
 * and custom color themes. It uses local storage to remember the user's theme preferences,
 * ensuring a personalized experience across sessions.
 */
const theme = {

  /**
   * Initializes the theme functionality by adding event listeners to the theme switch button
   * and the color buttons. It also loads the theme from local storage, if available.
   * 
   * @returns {void}
   */
  init : function() {
      // Select the theme switch button and add a click event listener to handle theme change
      const changeThemeButton = document.querySelector('#theme-switch');
      changeThemeButton.addEventListener('click', theme.handleChangeTheme);
      
      // Retrieve all color buttons elements using the '.theme-button' class selector
      const colorButtonsElements = document.querySelectorAll('.theme-button');

      // Attach a 'click' event listener to each color button using a for of loop
      for (const Element of colorButtonsElements) {
          Element.addEventListener('click', theme.handleThemeColorClick);
      }

      // Restore the previously selected theme from local storage
      theme.initLocalState();
  },

  /**
   * Restores the previous theme state based on values saved in the local storage.
   * It sets the body class to 'theme-dark' for dark mode and removes it for light mode.
   * If a custom color theme was previously selected, it applies that theme as well.
   *
   * @returns {void}
   */
  initLocalState : function() {
      const localSave = localStorage.getItem('theme');
      if (localSave === "dark") {
          document.body.classList.add('theme-dark');
      }
      else {
          document.body.classList.remove('theme-dark');
      }

      // Retrieve the previously saved custom color theme from local storage
      const colorTheme = localStorage.getItem('colorTheme');
      // If a custom color theme was saved, apply it to the website
      if (colorTheme) {
          theme.changeColorTheme(colorTheme);
      }
  },

  /**
   * Handles click events on theme color options.
   * This function is called when a user clicks on a theme color option.
   * It changes the color theme based on the selected theme and updates the logo image.
   *
   * @param {Event} event - The click event object.
   */
  handleThemeColorClick : function(event) {
      // Get the selected theme color from the clicked element's ID
      const themeColor = event.target.id;
      // Change the color theme based on the selected theme
      theme.changeColorTheme(themeColor);
      // Store the selected color theme in local storage
      localStorage.setItem('colorTheme', themeColor);
  },

  /**
   * Updates the color theme and logo image based on the selected theme.
   * This function changes the color theme by adding the corresponding CSS class
   * to the body element and updates the logo image source accordingly.
   *
   * @param {string} theme - The selected theme to apply.
   */
  changeColorTheme : function(theme) {
      const bodyElement = document.querySelector('body');
      bodyElement.classList.remove('theme-red', 'theme-blue', 'theme-green');
      bodyElement.classList.add(theme);
      // Update the logo image based on the selected theme
      const logoPath = "img/logo-"+theme+".png";
      const logoElement = document.querySelector('.logo__image');
      logoElement.src = logoPath;
  },

  /**
   * Toggles between light and dark themes and updates the user preference in the local storage.
   * This function is called when a user triggers a theme change (light/dark) action.
   * It adds or removes the 'theme-dark' class from the body element and updates the user preference in local storage.
   */
  handleChangeTheme : function() {
      const body = document.querySelector('body');
      if (body.classList.contains('theme-dark')) {
          body.classList.remove('theme-dark');
          // Store the theme preference in local storage as 'light'
          localStorage.setItem('theme', 'light');
      }
      else {
          body.classList.add('theme-dark');
          // Store the theme preference in local storage as 'dark'
          localStorage.setItem('theme', 'dark');
      }
  }
};

// When the DOM is fully loaded, initialize the theme functionality
document.addEventListener('DOMContentLoaded', theme.init);