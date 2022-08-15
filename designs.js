// Select color, height, width input and the grid/container.
var color = document.querySelector("#colorPicker");
var height = document.querySelector("#inputHeight");
var width = document.querySelector("#inputWidth");
var grid = document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid().
var sizeSelector = document.querySelector("#sizePicker");
sizeSelector.addEventListener('submit', (event) => {
    event.preventDefault();
    makeGrid(height, width);
});

// Clears the grid.
function refresh(){
    let grid = document.querySelectorAll('tr');
    grid.forEach((row) => {
        row.remove();
    });
}

function makeGrid(height, width) {
 // Resets the grid first then creates the grid.
    refresh();
    for (var i = 1; i <= height.value; i++){
        var row = document.createElement('tr');
        grid.append(row);
        for (var j = 1; j <= width.value; j++) {
            var col = document.createElement('td');
            row.append(col);
        }
        grid.append(row);
    }
}

// Colors a cell of the grid when clicked.
grid.addEventListener('click', function colorCell(cell) {
    cell.target.style.backgroundColor = color.value;
 });