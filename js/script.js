let gridSize = 16;
const sketchBox = document.querySelector('.sketch-box');

// Get sketch box height and width from CSS properties
const SKETCH_BOX_HEIGHT = sketchBox.computedStyleMap().get('height').value;
const SKETCH_BOX_WIDTH = sketchBox.computedStyleMap().get('width').value;

const gridSizeField = document.querySelector('.grid-size-field');
gridSizeField.value = gridSize;

createGrid(gridSize);
sketchBox.addEventListener('mouseover', paintSquare);

// Create grid of a given size
function createGrid(size) {
  let divsToCreate = size ** 2;
  // Calculate square size based on grid size
  let squareHeight = SKETCH_BOX_HEIGHT / size;
  let squareWidth = SKETCH_BOX_WIDTH / size;

  for (let i = 0; i < divsToCreate; i++) {
    let square = document.createElement('div');
    square.classList.add('grid-square', 'border');
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
