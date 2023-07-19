/**
 * Object representing the slider functionality.
 */
const slider = {
  // Array of slider image filenames
  sliderImages : [
      'saturn.jpg',
      'jupiter.jpg',
      'carina.jpg'
  ],
  // Array to store slider image elements
  sliderImagesElements : [],
  // Index of the currently displayed image in the sliderImages array
  currentImageIndex : 0,

  /**
   * Generates slider images and initializes the slider.
   * This function creates image elements for each image filename in the sliderImages array,
   * sets their source and alt attributes, and adds them to the slider container.
   * The first image is set as the current image (visible in the slider).
   */
  generateSliderImages : function() {
      const sliderContainer = document.querySelector('.slider');
      // Loop through each image filename in the sliderImages array
      for (const current of slider.sliderImages) {
          const newSliderImage = document.createElement('img');
          newSliderImage.src = "img/"+current;
          // Prepend the newly created image to the slider container
          newSliderImage.classList.add("slider__img");newSliderImage.alt = "Slider's Space Photos";sliderContainer.prepend(newSliderImage);
      }
      // Set the first image as the current image (visible in the slider)
      const firstSliderImage = document.querySelector('.slider__img');
      firstSliderImage.classList.add('slider__img--current');
  },
  
  /**
   * Initializes the slider and sets up event listeners.
   * This function calls the generateSliderImages function to create slider images,
   * gets all slider image elements, and adds event listeners to the previous
   * and next slider buttons to handle clicks.
   */
  init : function() {
      slider.generateSliderImages(); 
      slider.sliderImagesElements = document.querySelectorAll('.slider__img');
      const sliderButtons = document.querySelectorAll('.slider__btn');
      // Add event listener for the previous/next slider buttons
      const previousSliderButton = sliderButtons[0];previousSliderButton.addEventListener('click', slider.handleClickPreviousSlide);
      const nextSliderButton = sliderButtons[1];nextSliderButton.addEventListener('click', slider.handleClickNextSlide);
  },

  /**
   * Handles the click event for the next slider button.
   * This function updates the currently displayed image to the next image in the sliderImages array.
   * If it reaches the end of the array, it wraps around to the first image.
   */
  handleClickNextSlide : function() {
      const currentImage = document.querySelector('.slider__img--current');
      currentImage.classList.remove('slider__img--current');
      // console.log("before incrementing the index = " + slider.currentImageIndex);
      slider.currentImageIndex++;
      // console.log("after incrementing the index = " + slider.currentImageIndex);
      if (slider.currentImageIndex === 3){
          slider.currentImageIndex = 0;
      }
      
      const newCurrentImage = slider.sliderImagesElements[slider.currentImageIndex];
      // console.log(newCurrentImage);
      newCurrentImage.classList.add('slider__img--current');
  },

  /**
   * Handles the click event for the previous slider button.
   * This function updates the currently displayed image to the previous image in the sliderImages array.
   * If it reaches the beginning of the array, it wraps around to the last image.
   */
  handleClickPreviousSlide : function() {
      const currentImage = document.querySelector('.slider__img--current');
      currentImage.classList.remove('slider__img--current');

      slider.currentImageIndex--;
      if (slider.currentImageIndex < 0) {
          slider.currentImageIndex = 2;
      }

      const newCurrentImage = slider.sliderImagesElements[slider.currentImageIndex];
      newCurrentImage.classList.add('slider__img--current');
  }
}

// When the DOM is fully loaded, initialize the slider functionality
document.addEventListener('DOMContentLoaded', slider.init);