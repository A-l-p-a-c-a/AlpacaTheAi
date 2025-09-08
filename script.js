JAVA
// scripts.js

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

let painting = false;

// Start drawing
function startPosition(e) {
  painting = true;
  draw(e);
}

// Stop drawing
function endPosition() {
  painting = false;
  ctx.beginPath(); // Reset path
}

// Draw on canvas
function draw(e) {
  if (!painting) return;

  ctx.lineWidth = 5; // Line width
  ctx.lineCap = 'round'; // Rounded line ends
  ctx.strokeStyle = 'black'; // Line color

  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

// Event listeners
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);




[CANVA ELEMENT 


HTML
<canvas id="myCanvas" width="600" height="400"></canvas>

JAVASCRIPT 
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d'); // '2d' context for 2D drawing]



JAVASCRIPT
DRAW RECTANGLE 
ctx.fillStyle = 'blue'; // Set fill color
ctx.fillRect(50, 50, 150, 100); // Draw a filled rectangle

JAVASCRIPT 
DRAW CIRCLES 
ctx.beginPath(); // Start a new path
ctx.arc(200, 200, 50, 0, Math.PI * 2); // Draw a circle
ctx.fillStyle = 'red'; // Set fill color
ctx.fill(); // Fill the circle



DRAW TEXT
JAVA
ctx.font = '30px Arial'; // Set font size and family
ctx.fillStyle = 'green'; // Set text color
ctx.fillText('Hello Canvas!', 100, 100); // Draw text on canvas






DRAW IMAGE
JAVA
const img = new Image(); // Create a new image object
img.src = 'path/to/image.jpg'; // Set image source
img.onload = () => {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Draw image on canvas
};

JAVA
AS A LISTENER MOISE UP OR DOWN
canvas.addEventListener('mousedown', (e) => {
  // Handle mouse down
});
canvas.addEventListener('mousemove', (e) => {
  // Handle mouse move
});
canvas.addEventListener('mouseup', (e) => {
  // Handle mouse up
});







canvas.addEventListener('touchstart', (e) => startPosition(e.touches[0]));
canvas.addEventListener('touchend', endPosition);
canvas.addEventListener('touchmove', (e) => draw(e.touches[0]));





window.addEventListener('resize', () => {
  canvas.width = window.innerWidth * 0.8;
  canvas.height = window.innerHeight * 0.8;
});





ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
