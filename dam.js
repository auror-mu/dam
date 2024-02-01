const playBtn = document.getElementById('play-btn');
const imageContainer = document.getElementById('image-container');
const pageContainer = document.querySelector('.page__container');
const images = [
  'images/dam_exclu.jpeg', 'images/dambut.jpeg', 'images/dambut1.jpeg', 'images/dampuni.jpeg',
  'images/damreve.jpeg', 'images/damsad.jpeg', 'images/damsouffre.jpeg', 'images/damtete.png', 'images/damwatch.jpeg'
];

// Declare currentIndex as a global variable
let currentIndex = 0;

// Function to show the custom alert
function showAlert(message) {
  hideHomePage(); // Hide the home page when the alert is displayed

  const customAlert = document.getElementById('custom-alert');
  const customAlertMessage = document.getElementById('custom-alert-message');

  customAlertMessage.textContent = message;
  customAlert.style.display = 'block';

  // Close the modal when clicking on the close button
  const closeButton = document.querySelector('.close');
  closeButton.onclick = function() {
    customAlert.style.display = 'none';
    showHomePage(); // Restore the visibility of the home page after closing the alert
  };
}

// Function to hide the custom alert
function hideAlert() {
  const customAlert = document.getElementById('custom-alert');
  customAlert.style.display = 'none';
}

// Function to hide the home page
function hideHomePage() {
  pageContainer.style.visibility = 'hidden';
}

// Function to restore the visibility of the home page
function showHomePage() {
  pageContainer.style.visibility = 'visible';
}

// Function to shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to show the next image
function showNextImage() {
  // Clear the previous image
  imageContainer.innerHTML = '';

  // Create a new image element
  const newImage = document.createElement('img');
  newImage.src = images[currentIndex];
  newImage.alt = 'Image ' + (currentIndex + 1);

  // Append the new image to the container
  imageContainer.appendChild(newImage);

  // Increment the index or reset it to 0 if reached the end
  currentIndex = (currentIndex + 1) % images.length;

  // If we have displayed all images, shuffle the array again for the next round
  if (currentIndex === 0) {
    shuffleArray(images);
  }

  // After displaying the image, wait for 5 seconds and then show the main page
  setTimeout(() => {
    showAlert("Arrêt la déprim'");
  }, 5000);
}

playBtn.addEventListener('click', () => {
  hideHomePage();
  setTimeout(() => {
    showNextImage();
  }, 10); // Delay to make sure hideHomePage() takes effect before showNextImage()
});
