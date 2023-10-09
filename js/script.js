let gridSize = 16;
const sketchBox = document.querySelector('.sketch-box');

// Get sketch box height and width from CSS properties
const SKETCH_BOX_HEIGHT = sketchBox.computedStyleMap().get('height').value;
const SKETCH_BOX_WIDTH = sketchBox.computedStyleMap().get('width').value;

const gridSizeField = document.querySelector('.grid-size-field');
gridSizeField.value = gridSize;

const gridSizeButton = document.querySelector('.grid-size-button');

const toggleBordersButton = document.querySelector('.toggle-borders-button');
let toggledBorders = false;

const clearCanvasButton = document.querySelector('.clear-canvas-button');

const rgbModeButton = document.querySelector('.rgb-mode-button');

createGrid(gridSize);
sketchBox.addEventListener('mouseover', paintSquareBlack);
gridSizeButton.addEventListener('click', changeGridSize);
toggleBordersButton.addEventListener('click', toggleBorders);
toggleBordersButton.addEventListener('click', updateToggledBorders);
clearCanvasButton.addEventListener('click', clearCanvas);
rgbModeButton.addEventListener('click', toggleRgbMode);

// Create grid of a given size
function createGrid(size) {
  let divsToCreate = size ** 2;
  // Calculate square size based on grid size
  let squareHeight = SKETCH_BOX_HEIGHT / size;
  let squareWidth = SKETCH_BOX_WIDTH / size;

  for (let i = 0; i < divsToCreate; i++) {
    let square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.height = `${squareHeight}px`;
    square.style.width = `${squareWidth}px`;
    sketchBox.appendChild(square);
  }
}

// Paint hovered-over square black
function paintSquareBlack(event) {
  // Skip the sketch box itself
  if (event.target === sketchBox) {
    return;
  } else {
    event.target.style.backgroundColor = 'black';
  }
}

// Paint hovered-over square random colour
function paintSquareRgb(event) {
  // Skip the sketch box itself
  if (event.target === sketchBox) {
    return;
  } else {
    event.target.style.backgroundColor = `rgb(
      ${random(0, 255)},
      ${random(0, 255)},
      ${random(0, 255)}
    )`;
  }
}

// Change grid size if the respective button is clicked
function changeGridSize() {
  // Validate user input
  if (
    gridSizeField.value < 1 ||
    gridSizeField.value > 100 ||
    gridSizeField.value === ''
  ) {
    gridSizeField.value = gridSize;
    return;
  } else {
    clearGrid();
    gridSize = gridSizeField.value;
    createGrid(gridSize);
    if (toggledBorders) {
      toggleBorders();
    }
  }
}

// Remove grid squares (helper function)
function clearGrid() {
  let gridSquares = document.querySelectorAll('.grid-square');
  for (square of gridSquares) {
    square.remove();
  }
}

// Toggle borders on and off with a button
function toggleBorders() {
  let gridSquares = document.querySelectorAll('.grid-square');
  for (square of gridSquares) {
    square.classList.toggle('border');
  }
}

// Clear sketch box
function clearCanvas() {
  // Decided to remove the CSS property instead of just calling
  // clearGrid() and createGrid() for performance reasons - here, only
  // one loop for all grid squares is required instead of two
  let gridSquares = document.querySelectorAll('.grid-square');
  for (square of gridSquares) {
    square.style.removeProperty('background-color');
  }
}

// Update the status of the toggle border button
function updateToggledBorders() {
  if (toggledBorders) {
    toggledBorders = false;
  } else {
    toggledBorders = true;
  }
}

// Get random integer between min and max (both inclusive) (helper function)
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Turn on RGB mode
function toggleRgbMode() {
  sketchBox.removeEventListener('mouseover', paintSquareBlack);
  sketchBox.addEventListener('mouseover', paintSquareRgb);
}
