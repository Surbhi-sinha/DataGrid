
//basic unit of a grid
class Cell {
  value ;
  backgroundColor ;
  resize ;
  fontStyle ;
  fontSize ;
  fontColor;
  overflow ;
  borderSize;
  borderStyle ;
  borderColor ;
  minHeight ;
  minWidth ;
  readOnly;
  x_position;
  y_position;

  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  setValue(value) {
    this.value = value;
  }

  setCellFontStyle(fontStyle, fontSize, fontColor) {
    this.fontStyle = fontStyle;
    this.fontSize = fontSize;
    this.fontColor = fontColor;
  }

  getFontStyle() {
    let fontSize = this.fontSize;
    let fontStyle = this.fontStyle;
    return { fontSize, fontStyle };
  }

  setOverflow(value) {
    this.overflow = value;
  }

  setX_Position(x) {
    this.x_position = x;
  }

  setY_Position(y) {
    this.y_position = y;
  }

  getOverflow() {
    return this.overflow;
  }

  getCellPosition() {
    let xval = this.x_position;
    let yval = this.y_position;
    return { xval, yval };
  }

  setCellBackground(color) {
    this.backgroundColor = color;
  }

  clearCell() {
    this.value = "";
  }

  setResize(value) {
    this.resize = value;
  }

  getResizeValue() {
    return this.resize;
  }

  setBorderStyle(borderSize, borderStyle, borderColor) {
    this.borderColor = borderColor;
    this.borderSize = borderSize;
    this.borderStyle = borderStyle;
  }

  getBorderStyle() {
    let borderColor = this.borderColor;
    let borderStyle = this.borderStyle;
    let borderSize = this.borderSize;

    return { borderColor, borderStyle, borderSize };
  }

  setCellReadOnly(value) {
    this.readOnly = value;
  }
}

export default Cell;
