// import Column from "./Column.js";
import Row from "./Row.js";

class Grid {
  rowCount = 10;
  columnCount = 10;
  scrollX;
  scrollY;
  height = "auto";
  width = "100%";
  backgroundColor;
  headers = ['A','B','C','D','E','F','G','H','I','J'];
  rows = [];
  
  constructor(rowsCount, colsCount) {
    if(rowsCount && colsCount){
      this.rowCount = rowsCount;
      this.columnCount = colsCount;
    }
  }
  addHeaders(){
      //knows how to add column headers
      // logic : if data is none then A-Z otherwise from the first row of the dataset
      
  }

  getCellValue(row, column) {
    // know how to return the value of the cell
  }
  setCellValue(row, column, value) {
    this.rows[row].setCell(column, value);
  }
  
  addRow(){
    //knows how to add a row
    let row = new Row();
    this.rows.push(row);
  }

  addColumn(){
    //knows how to add a column
  }

  removeRow(){
    //knows how to remove a row
    this.rows.pop();
  }

  removeColumn(){
    //knows how to remove a col
  }
  setScrollX(){
    //knows how to set the scroll for the X;
  }
  setScrollY(){
    // knows how to set the scroll for the Y axis;
  }

  clearGrid(){
    //delete all rows
  }

  setBorder(){
    //set Border to the div (Grid) 
  }

// Somehow knows how to create the table
  createTable = (rowCount, columnCount) => {
    let colored = true;
    // Get the GridLayout div
    var gridLayout = document.getElementById("GridLayout");

    // Create a table element
    var table = document.createElement("table");

    for (var i = 0; i < rowCount; i++) {
      // Create a new row
      var row = document.createElement("tr");
    
      for (var j = 0; j < columnCount; j++) {
        // Create a new column
        var cell = document.createElement('textarea');
        cell.setAttribute("id", `Row${i}Column${j}`);
        cell.style.fontSize = "2em";
        cell.style.height = '1em';
        cell.style.width = '5em';
        cell.style.overflow = "hidden";
        // cell.style.border = "none";
        cell.style.resize = "none";
        cell.style.backgroundColor = "transparent";
        // cell.textContent = this.getCellValue(i,j).getValue()? this.getCellValue(i,j).getValue():"text";
        row.appendChild(cell);
      }
      if(colored){
        row.style.backgroundColor = "Yellow"
        colored = false;
      }else{
        colored = true;
      }
      // Add the row to the table
      row.style.whiteSpace = "nowrap"
      row.style.overflowX = "auto"
      table.appendChild(row);
    }
    // gridLayout.style.overflow = "hidden";
    // Add the table to the GridLayout div
    gridLayout.style.border = "solid black 2px"
    gridLayout.appendChild(table);
  };
}

// export {Grid} ;
export default Grid;
