const colors = ['red', 'green', 'blue', 'LemonChiffon', 'purple', 'orange', 'LightCoral', 'Indigo', 'yellow']; // Array of colours

const colorDisplay = document.getElementById('color-display'); // Get the div element
const flipButton = document.getElementById('flip-btn'); // Get the button element

flipButton.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * colors.length); // Get random index
    const randomColor = colors[randomIndex]; // Get colour form array at random index
    colorDisplay.style.backgroundColor = randomColor; // Set background colour
});
