const SKETCH_BOX_HEIGHT = 600;
const SKETCH_BOX_WIDTH = 600;

let gridSize = 16;

const sketchBox = document.querySelector('.sketch-box');

// Create grid of a given size
function createGrid(size) {
  let divsToCreate = size ** 2;
  // Calculate square size based on grid size
  let squareHeight = SKETCH_BOX_HEIGHT / size;
  let squareWidth = SKETCH_BOX_WIDTH / size;

  for (let i = 0; i < divsToCreate; i++) {
    let square = document.createElement('div');
    square.classList.add('grid-square');
    square.textContent = '1';
    square.style.height = `${squareHeight}px`;
    square.style.width = `${squareWidth}px`;
    sketchBox.appendChild(square);
  }
}

createGrid(gridSize);
