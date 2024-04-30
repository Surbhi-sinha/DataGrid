class Cell {//basic unit of a grid
  
      //class properties
      value = "null";
      backgroundColor = "null";
      resize = "none";
      fontStyle = "normal";
      fontSize = '12px';
      overflow = "hidden";
      borderSize = "none";
      borderStyle = "none";
      borderColor = "none";
      height = "auto";
      x_position;
      y_position;
      cell = document.createElement('textarea');
    
      constructor(value) {
        this.value = value;
        this.cell.textContent = value;
      }
      getValue() {
        //can get the value inside the cell
        return this.value;
      }
      setValue(value) {
        //can set the value inside the cell
        this.value = value;
        this.cell.textContent = value;
      }
    
      setFontStyle(fontStyle , fontSize){
        this.fontStyle = fontStyle;
        this.fontSize = fontSize;
        this.cell.style.fontSize = this.fontSize;
        this.cell.style.fontStyle = this.fontStyle;
      }
    
      getFontStyle(){
        let fontSize = this.fontSize;
        let fontStyle = this.fontStyle;
        return {fontSize, fontStyle};
      }
    
      setOverflow(value){
        this.overflow = value;
        this.cell.style.overflow = value;
      }
      setX_Position(x){
        this.x_position = x;
      }
      setY_Position(y){
        this.y_position = y;
      }
      getOverflow(){
        return this.overflow;
      }
      getCellPosition(){
        let xval = this.x_position;
        let yval = this.y_position; 
        return {xval , yval}
      }
      setCellBackground(color){
        this.backgroundColor = color;
        this.cell.style.backgroundColor = this.backgroundColor;
      }
      clearCell(){
        this.value = "";
        this.cell.textContent = "";
      }
    
      setResize(value){ // none , vertical , horizontal , block , inline , inherit , initial
        this.resize = value ;
        this.cell.style.resize = value;
      }
      getResizeValue(){
        // let resize = this.resize;
        return this.resize;
      }
      setBorderStyle(borderSize , borderStyle , borderColor){
            this.borderColor = borderColor;
            this.borderSize = borderSize;
            this.borderStyle = borderStyle;
            this.cell.style.borderColor = borderColor;
            this.cell.style.borderWidth = borderSize;
            this.cell.style.borderStyle = borderStyle;

      }

      getBorderStyle(){
            let borderColor = this.borderColor;
            let borderStyle = this.borderStyle;
            let borderSize = this.borderSize;

            return {borderColor, borderStyle, borderSize};
      }
    }
    
    export default Cell;
    