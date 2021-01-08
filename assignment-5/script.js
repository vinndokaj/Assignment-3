//Assignment5

function addRow(){
  let grid = document.querySelector('.grid-container');
  let squares = [];
  for(let i = 0; i < 3; i++){
    squares[i]=document.createElement('div');
    squares[i].classList.add('grid-item');
    grid.append(squares[i]);
  }
}
