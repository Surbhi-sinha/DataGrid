import Cell from "./Components/Cell.js";
import Grid from "./Components/Grid.js";
import Row from "./Components/Row.js";

// let grid2 = new Grid(3, 5);
// grid2.createTable(grid2.rowCount, grid2.columnCount);
// for (let i = 0; i < grid2.rowCount; i++) {
//   for (let j = 0; j < grid2.columnCount; j++) {
//     grid2.setCell(i, j, `cell value ${i}, ${j}`);
//   }
// }
// grid2.setBackgroundColor("Row1Column4", "grey");
// console.log(grid2);

// let myGrid = new Grid(5, 5);
// myGrid.createTable(myGrid.rowCount, myGrid.columnCount);


// let myGrid1 = new Grid(10,22);

// myGrid1.setCellValue(3,5 , "Surbhi");
// myGrid1.setCellValue(3,2 , "Surbhi");
// myGrid1.setCellValue(5,7 , "Surbhi");
// myGrid1.createTable(myGrid1.rowCount, myGrid1.columnCount);
// console.log(myGrid1);


//testing the class for the grid
let mgr = new Grid();
mgr.createTable(mgr.rowCount , mgr.columnCount)
console.log(mgr)

// testing the class for the cell
let cell = new Cell("CELL1");
cell.backgroundColor = "blue"
cell.setValue("fweuh")
cell.setResize('none');
cell.setFontStyle('italic',"30px");
cell.setCellBackground("yellow");
cell.setBorderStyle("2px" , "dashed" , "black")

console.log(cell.getBorderStyle())
console.log( cell.getCellPosition());
console.log(cell.getFontStyle())
console.log(cell.value);
console.log(cell.cell);


//should be a part of the renderer
let curr = document.createElement("div");
curr.appendChild(cell.cell);

const grid = document.getElementById("GridLayout");
grid.appendChild(curr)


let birds = ["sparrow" ,"crow" , "owl" , "swan" , "peacock", "hen" ,"ostrich" , "woodpecker","parrot" , "duck"];

// testing the class for the row;
let row = new Row();

// row.render();
console.log(row);
row.addCell("hunt");

console.log(row.Cells);

row.createRowFromArray(birds );
row.setBackgroundColor("blue");
// row.setFontStyle("20" , "italic")
// row.clearRow();
console.log(row.Cells)
//part of the renderer
// let currRow = document.createElement("div");
// for(let i = 0 ; i < row.Cells.length ; i++){
//     currRow.append(row.Cells[i].value+" ");
// };
row.render();
// grid.appendChild(currRow);
