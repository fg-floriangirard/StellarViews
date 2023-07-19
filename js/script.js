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

/**
 * Generates slider images and initializes the slider.
 * This function creates image elements for each image filename in the sliderImages array,
 * sets their source and alt attributes, and adds them to the slider container.
 * The first image is set as the current image (visible in the slider).
 */
function generateSliderImages() {
  const sliderImages = [
      'saturn.jpg',
      'jupiter.jpg',
      'carina.jpg'
   ];

   const sliderContainer = document.querySelector('.slider');
   // Loop through each image filename in the sliderImages array
   for (const current of sliderImages) {
      const newSliderImage = document.createElement('img');     
      newSliderImage.src = "img/"+current;     
      newSliderImage.classList.add("slider__img");
      newSliderImage.alt = "Partir à la plage";
      // Prepend the newly created image to the slider container
      sliderContainer.prepend(newSliderImage);
   }
   // Set the first image as the current image (visible in the slider)
   const firstSliderImage = document.querySelector('.slider__img');
   firstSliderImage.classList.add('slider__img--current');
}

// Get the newsletter menu button element
const menuItemElement = document.querySelector('#newsletter-btn');


/**
 * Function to handle the click event on the newsletter menu button.
 * When the button is clicked, it prevents the default action,
 * logs a message, and displays the newsletter panel.
 *
 * @param {Event} event - The click event object.
 * @returns {void}
 */
function handleClickNewsletterMenu(event) {
    event.preventDefault();
    // console.log('You just clicked on the newsletter button'); 
    const newsletterPanel = document.querySelector('.newsletter');   
    newsletterPanel.classList.add('newsletter--on');
}

// Attach a click event listener to the newsletter menu button
menuItemElement.addEventListener('click', handleClickNewsletterMenu);

// Get the newsletter "close" button element
const closeElement = document.querySelector('.newsletter__close');

/**
 * Function to handle the click event on the newsletter cross icon.
 * When the icon is clicked, it removes the 'newsletter--on' class
 * from the newsletter panel, hiding it from view.
 *
 * @returns {void}
 */
function handleClickNewsletterCross() {
    const newsletterPanel = document.querySelector('.newsletter');
    newsletterPanel.classList.remove('newsletter--on');
}

// Attach a click event listener to the newsletter cross icon
closeElement.addEventListener('click', handleClickNewsletterCross);



// Array of forbidden email domains
const forbiddenDomains = [
    '@yopmail.com',
    '@yopmail.fr',
    '@yopmail.net',
    '@cool.fr.nf',
    '@jetable.fr.nf',
    '@courriel.fr.nf',
    '@moncourrier.fr.nf',
    '@monemail.fr.nf',
    '@monmail.fr.nf',
    '@hide.biz.st',
    '@mymail.infos.st',
];

/**
 * Function to check if an email address contains any forbidden domain.
 *
 * @param {string} email - The email address to check.
 * @returns {boolean} - True if the email is not from any forbidden domain, false otherwise.
 */
function isForbiddenEmail(email) { 
    for (const domain of forbiddenDomains) { 
        if (email.includes(domain)) {    
            return false;
        }
    } 
    return true;
}

// Get the DOM element representing the newsletter form
const formElement = document.querySelector('.newsletter form');

/**
 * Function to handle the newsletter form submission.
 * When the form is submitted, it prevents the default action,
 * logs a message, and checks if the email is from any forbidden domain.
 * If the email is from a forbidden domain, it adds an error message to the newsletter panel.
 *
 * @param {Event} event - The form submission event object.
 * @returns {void}
 */
function handleNewsletterSubmit(event) {
  event.preventDefault();
  const userValue = document.querySelector('.newsletter__field').value;

  if (isForbiddenEmail(userValue) === false) {
      // Remove any previously displayed success messages (if any)
      const previousSuccess = document.querySelector('.newsletter .message--success');
      if (previousSuccess) {
          previousSuccess.remove();
      }

      // Display the error message
      const newError = document.createElement('p');
      newError.classList.add('message', 'message--error');
      newError.innerHTML = "Disposable addresses are not allowed";

      const newsletterPanel = document.querySelector('.newsletter');
      newsletterPanel.append(newError);

      // Remove the error message after a certain period (e.g., 2.5 seconds)
      setTimeout(() => {
          newError.remove();
      }, 2500);
  } else {
      // Remove any previously displayed error messages (if any)
      const previousError = document.querySelector('.newsletter .message--error');
      if (previousError) {
          previousError.remove();
      }

      // Display the success message
      const newSuccess = document.createElement('p');
      newSuccess.classList.add('message', 'message--success');
      newSuccess.innerHTML = "Subscription accepted! Thank you for subscribing.";

      const newsletterPanel = document.querySelector('.newsletter');
      newsletterPanel.append(newSuccess);

      // Remove the success message after 2.5s
      setTimeout(() => {
          newSuccess.remove();
      }, 2500);
  }
}

// Attach a submit event listener to the newsletter form
formElement.addEventListener('submit', handleNewsletterSubmit);

articles.init();