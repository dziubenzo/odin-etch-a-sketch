let gridSize = 16;

const sketchBox = document.querySelector('.sketch-box');

function createGrid(size) {
  let divsToCreate = size ** 2;

  for (let i = 0; i < divsToCreate; i++) {
    let square = document.createElement('div');
    square.classList.add('.grid-square');
    sketchBox.appendChild(square);
  }
}

createGrid(16);