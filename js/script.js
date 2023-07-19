/**
 * Function to toggle the dark theme on the website.
 * If the current theme is 'theme-dark', it removes the class to switch to the light theme.
 * Otherwise, it adds the 'theme-dark' class to switch to the dark theme.
 * 
 * @returns {void}
 */
function changeTheme() {
  const body = document.querySelector('body');
  
  if (body.classList.contains('theme-dark')) {
    body.classList.remove('theme-dark');
  }
  else {
    body.classList.add('theme-dark');
  }
}