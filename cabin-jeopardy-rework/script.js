//Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");


defaultGrid();
//Creates a default grid sized 16x16 
function defaultGrid() {
  makeRows(6);
  makeColumns(6);
}

//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

  //Creates rows
  for (r = 0; r < rowNum; r++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "gridRow";
  };
};

//Creates columns
function makeColumns(cellNum) {
  for (i = 0; i < rows.length; i++) {
    for (j = 0; j < cellNum; j++) {
      let newCell = document.createElement("div");
      newCell.className = `col-${j} row-${i}`; // i and j are the respective numbers in the for loops to show rows/columns
      //${} is a Template literals
      newCell.textContent = "poop"
      //you can add conent and text here
      rows[j].appendChild(newCell);
    };

  };
};