import Cell from "./Cell.js";

class Row {
  id;
  BackgroundColor;
  FontStyle;
  FontSize;
  FontColor;
  Cells;
  Display;
  constructor(id) {
    this.id = id;
    this.Cells = [];
  }

  getSize() {
    return this.Cells.length;
  }

  setBackgroundColor(backgroundColor) {
    this.BackgroundColor = backgroundColor;
    this.Cells.forEach((cell) => {
      cell.setCellBackground(backgroundColor);
    });
  }

  getBackgroundColor() {
    let backgroundColor = this.BackgroundColor;
    return backgroundColor;
  }

  setFontStyle(fontStyle, fontSize, fontColor) {
    this.FontSize = fontSize;
    this.FontStyle = fontStyle;
    this.FontColor = fontColor;
    for (let i = 0; i < this.Cells.length; i++) {
      this.Cells[i].setCellFontStyle(
        this.FontStyle,
        this.FontSize,
        this.FontColor
      );
    }
  }

  addCell(value) {
    let cell = new Cell(value);
    cell.setX_Position(this.id);
    cell.setY_Position(this.Cells.length);
    this.Cells.push(cell);
  }

  removeCell() {
    this.Cells.pop();
  }

  getFontStyles() {
    let fontSize = this.FontSize;
    let fontStyle = this.FontStyle;
    let fontColor = this.FontColor;
    return { fontSize, fontStyle, fontColor };
  }

  getCellValue(index) {
    return this.Cells[index];
  }

  setCellValue(index, value) {
    this.Cells[index].setValue(value);
  }

  clearRow() {
    this.Cells = {};
  }

  createRowFromArray(arr) {
    let currRow = this.Cells;
    arr.forEach((element) => {
      let cell = new Cell(element);
      currRow.push(cell);
    });
    return currRow;
  }
}

export default Row;
