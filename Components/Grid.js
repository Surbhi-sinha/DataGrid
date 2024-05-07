import Row from "./Row.js";

class Grid {
  rowCount;
  columnCount;
  overflow;
  height;
  width;
  rows = [];
  data;
  headers = [];

  constructor(data, rowsCount, colsCount) {
    if (rowsCount && colsCount) {
      this.rowCount = rowsCount;
      this.columnCount = colsCount;
    } else {
      let cols = Object.keys(data[0]).length;
      let row = data.rows ? data.rows : data.length;
      let col = data.cols ? data.cols : cols;
      this.rowCount = row;
      this.columnCount = col;
    }
    this.data = data;
  }

  getRowCount() {
    return this.rowCount;
  }

  getColumnCount() {
    return this.columnCount;
  }

  getCellValue(row, column) {
    for (let i = 0; i < this.rowCount; i++) {
      for (let j = 0; j < this.columnCount; j++) {
        if (
          this.rows[i].Cells[j].x_position === row &&
          this.rows[i].Cells[j].y_position === column
        ) {
          return this.rows[i].Cells[j].value;
        }
      }
    }
  }

  setCellValue(row, column, value) {
    for (let i = 0; i < this.rowCount; i++) {
      for (let j = 0; j < this.columnCount; j++) {
        if (
          this.rows[i].Cells[j].x_position === row &&
          this.rows[i].Cells[j].y_position === column
        ) {
          this.rows[i].Cells[j].value = value;
        }
      }
    }
  }

  createRow(id, column) {
    let row = new Row(id);
    for (let i = 0; i < column; i++) {
      row.addCell();
    }
    return row;
  }

  createGrid() {
    for (let i = 0; i < this.rowCount; i++) {
      let row = this.createRow(i, this.columnCount);
      this.rows.push(row);
    }
  }

  addRow() {
    let row = this.createRow(this.rowCount, this.columnCount);
    this.rowCount++;
    this.rows.push(row);
  }

  addColumn() {
    this.columnCount++;
    for (let i = 0; i < this.rowCount; i++) {
      this.rows[i].addCell();
    }
  }

  removeRow() {
    this.rows.pop();
    this.rowCount--;
  }

  removeColumn() {
    for (let i = 0; i < this.rowCount; i++) {
      this.rows[i].removeCell();
    }
    this.columnCount--;
  }

  setOverflow(value) {
    this.overflow = value;
  }

  clearGrid() {
    this.rows = [];
    this.rowCount = 0;
    this.columnCount = 0;
  }

  sortData(data, key, ascending = true) {
    return data.sort((a, b) => {
      if (a[key] < b[key]) return ascending ? -1 : 1;
      if (a[key] > b[key]) return ascending ? 1 : -1;
      return 0;
    });
  }

  RenderHeader(GridElement) {
    if (this.data) {
      this.headers = Object.keys(this.data[0]);
    } else {
      this.headers = "";
    }

    const ColumnHeaderRow = document.createElement("div");
    ColumnHeaderRow.setAttribute("class", "Column-header-row");

    for (let j = 0; j < this.columnCount; j++) {
      let cell = this.headers[j];
      let cellElem = document.createElement("textarea");
      cellElem.textContent = cell;
      cellElem.setAttribute("class", "grid-header-cell");
      cellElem.classList.add(`column${j}`);
      cellElem.readOnly = "true";
      cellElem.addEventListener("dblclick", () => {
        let ascending = true;
        let currData = [...this.data];
        this.data = this.sortData(currData, cell, ascending);
        this.data = [...currData];
        this.Render();
      });
      ColumnHeaderRow.appendChild(cellElem);
    }
    GridElement.appendChild(ColumnHeaderRow);
  }

  Render() {
    this.createGrid();

    const grid = document.querySelector(".Grid");
    if (!grid) {
      const gridLayout = document.createElement("Grid");
      gridLayout.setAttribute("class", "Grid");
      let GridElement = document.createElement("div");
      GridElement.setAttribute("class", "grid-element");
      this.RenderHeader(GridElement);

      for (let i = 0; i < this.rowCount; i++) {
        let rowElement = document.createElement("div");
        rowElement.setAttribute("class", `row${i}`);
        rowElement.classList.add("row");

        if (this.data != undefined && this.data[i]) {
          let keys = Object.keys(this.data[i]); // Get an array of keys

          for (let j = 0; j < this.columnCount; j++) {
            let key = keys[j];
            let cellElem = document.createElement("textarea");
            cellElem.setAttribute("class", "grid-cell");
            cellElem.classList.add(`column${j}`);
            cellElem.addEventListener("keydown", function (event) {
              if (event.key === "Enter") {
                event.preventDefault();
                cellElem.blur();
              }
            });
            if (this.data[i].hasOwnProperty(key)) {
              let cellValue = this.data[i][key];
              cellElem.textContent = cellValue;
            }
            rowElement.appendChild(cellElem);
          }
          GridElement.appendChild(rowElement);
        } else {
          for (let j = 0; j < this.columnCount; j++) {
            let cellElem = document.createElement("textarea");
            cellElem.setAttribute("class", "grid-cell");
            cellElem.classList.add(`column${j}`);
            let cellValue = "";
            cellElem.textContent = cellValue;
            rowElement.appendChild(cellElem);
          }
        }
        GridElement.appendChild(rowElement);
      }
      gridLayout.appendChild(GridElement);
      document.body.appendChild(gridLayout);
    } else {
      grid.remove();
      this.Render();
    }
  }
}

export default Grid;
