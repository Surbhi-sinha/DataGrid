import Cell from "./Cell.js";

class Row {
  BackgroundColor;
  FontStyle;
  FontSize;
  Cells;
  Display;

  constructor() {
    this.BackgroundColor = "null";
    this.FontStyle= "null";
    this.FontSize= "null";
    this.display = "flex";
    this.Cells = [];

  }
  getSize() {
    return this.Cells.length;
  }
  setDisplay(){

  }
  setBackgroundColor(backgroundColor) {
    this.BackgroundColor = backgroundColor;
    this.Cells.forEach((cell) =>{
        cell.setCellBackground(backgroundColor)
    })
  }
  getBackgroundColor() {
    let backgroundColor = this.BackgroundColor;
    return backgroundColor;
  }
  setFontStyle(fontStyle, fontSize) {
    this.FontSize = fontSize;
    this.FontStyle = fontStyle;
    this.Cells.forEach((cell) =>{
        cell.setFontStyle(fontStyle,fontSize);
    })
  }
  addCell(value) {
    let cell = new Cell(value);
    this.Cells.push(cell);
  }
  removeCell() {
    this.Cells.pop();
  }
  getFontStyles() {
    let fontSize = this.FontSize;
    let fontStyle = this.FontStyle;
    return { fontSize, fontStyle };
  }
  getCellValue(index) {
    // getting the cell from there index;
    return this.Cells[index];
  }
  setCellValue(index, value) {
    // set ting the cell value to that index
    this.Cells[index].setValue(value);
  }
  clearRow() {
    this.Cells = {}
  }

  createRowFromArray(arr){
    let currRow = this.Cells;
    arr.forEach(element => {
        let cell = new Cell(element);
        currRow.push(cell);
    });
    return currRow;
  }

  render(){
      const grid = document.getElementById("GridLayout");
      let row = document.createElement('div');
      for(let i = 0 ; i < this.Cells.length ; i++){
            this.Cells[i].setOverflow("hidden");
            this.Cells[i].setFontStyle("italic" , "15px" );
            this.Cells[i].setResize("none");
            this.Cells[i].setBorderStyle("2px" , "solid" , "black");
            
            row.appendChild(this.Cells[i].cell);
      }
      grid.appendChild(row)
  }
}

export default Row;
