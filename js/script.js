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

articles.init();