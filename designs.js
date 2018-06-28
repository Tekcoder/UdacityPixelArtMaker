
function makeGrid(event) {

    // Initialize a variable element
    let height;
    let width;
    let canvas;
    let table;
    let row;
    let cell;

    // Select canvas size input
    height = document.querySelector("#inputHeight").value;
    width = document.querySelector("#inputWeight").value;

    // Get the reference for pixel canvas
    canvas = document.querySelector("#pixelCanvas");

    // Creates a <table> element
    table = document.createElement("table");

    // Creates the cells
    for (let i = 0; i < height; i++) {
        // Creates a table row
        row = document.createElement("tr");

        for (let j = 0; j < width; j++) {
            // Create a cell and adds them to the end of the table row
            cell = document.createElement("td");
            row.appendChild(cell);
        }

        // Adds the row to the end of the table
        table.appendChild(row);
    }

    // Assign the structure of the table to the canvas, the old canvas will be replaced by the new one
    canvas.innerHTML = table.innerHTML;

    // Adds the assigned color to the clicked cell
    $("td").click(function () {

        // Click the cell to assign the selected color to it
        if ($(this).attr("bgcolor") === undefined || $(this).attr("bgcolor") === "#ffffff") {
            $(this).attr("bgcolor", document.getElementById("colorPicker").value);
        }
        // Double click to erase color
        else {
            $(this).attr("bgcolor", "#ffffff");
        }

    });
    event.preventDefault();
}

$("form").submit(makeGrid);
