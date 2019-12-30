const presets = [
  "#fcc7da",
  "#b3429e",
  "#ad84cf",
  "#6a26d1",
  "#21abeb",
  "#a0e8b0",
  "#d93f3f",
  "#e8a656",
  "#faca0c"
];
let colorContainer = document.querySelector('#colorSelector');
let colorTable = document.createElement('table');
colorTable.setAttribute('id', 'boot-color-table')
let colorRow;
let colorCell;
for(let i=0; i < presets.length; i++){
  if(i % 4 == 0){
    if(colorRow){colorTable.append(colorRow)}
    colorRow = document.createElement('tr');
  }
  colorCell = document.createElement('td');
  colorCell.style.backgroundColor = presets[i]
  colorCell.innerHTML = presets[i]
  colorRow.append(colorCell)
}
colorTable.append(colorRow);
colorContainer.append(colorTable);
let colors = document.querySelectorAll('#boot-color-table td');
let boot = document.querySelector('#boot-color')
for(let i=0; i<colors.length; i++){
  colors[i].addEventListener("click", (event)=>{
     for(let i=0; i<boot.children.length; i++){
       boot.children[i].style.fill = event.target.style.backgroundColor
     }
   })
}
  // this.style.fill = "#fcc7da"
