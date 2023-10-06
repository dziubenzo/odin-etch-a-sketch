const DEFAULT_GRID_SIZE = 16;
let gridSize = 16;
const sketchBox = document.querySelector('.sketch-box');

// Get sketch box height and width from CSS properties
const SKETCH_BOX_HEIGHT = sketchBox.computedStyleMap().get('height').value;
const SKETCH_BOX_WIDTH = sketchBox.computedStyleMap().get('width').value;

const gridSizeField = document.querySelector('.grid-size-field');
gridSizeField.value = gridSize;

const gridSizeButton = document.querySelector('.grid-size-button');

createGrid(gridSize);
sketchBox.addEventListener('mouseover', paintSquare);
gridSizeButton.addEventListener('click', changeGridSize);

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

// Paint hovered-over square
function paintSquare(event) {
  // Skip the sketch box itself
  if (event.target === sketchBox) {
    return;
  } else {
    event.target.style.backgroundColor = 'black';
  }
}

// Change grid size
function changeGridSize() {
  // Validate input
  if (
    gridSizeField.value < 0 ||
    gridSizeField.value > 100 ||
    gridSizeField.value === ''
  ) {
    gridSizeField.value = DEFAULT_GRID_SIZE;
    return;
  } else {
    clearGrid();
    createGrid(gridSizeField.value);
  }
}

// Remove grid squares (helper function)
function clearGrid() {
  let gridSquares = document.querySelectorAll('.grid-square');
  for (square of gridSquares) {
    square.remove();
  }
}
