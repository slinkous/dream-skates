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
const parts = [
  "#laces-color",
  "#boot-color",
  "#toestop-color",
  "#wheels-color"
]
let colorContainer = document.querySelector('#colorSelector');
let colorTable = document.createElement('table');
colorTable.setAttribute('id', 'boot-color-table')
let colorRow = document.createElement('tr');
colorTable.append(colorRow);
colorContainer.append(colorTable);
let colorCell;
let target = document.querySelector('#boot-color')

for(let i=0; i<parts.length; i++){
  let part = document.querySelector(parts[i])
  part.addEventListener("click", (event)=>{
    console.log(part)
    target = part
  })
}

function addColor(color){
  let currentRow = colorTable.lastChild;
  if(currentRow.children.length >= 4){
    currentRow = document.createElement('tr');
    colorTable.append(currentRow)
  }
  colorCell = document.createElement('td');
  colorCell.style.backgroundColor = color;
  colorCell.innerHTML = color;
  currentRow.append(colorCell)
  colorCell.addEventListener("click", (event)=>{
    target.style.fill = event.target.style.backgroundColor;
   })

}
for(let i=0; i < presets.length; i++){
  addColor(presets[i])
}



let newColorForm = document.querySelector("#newColorForm")
newColorForm.addEventListener("submit",(event)=>{
  event.preventDefault();
  console.log("form submitted")
  let newColor = document.querySelector('#newColor').value;
  addColor(newColor);
})

let metallicToggle = document.querySelector('#metallic-toggle');
let metallicTexture = document.querySelector('#texture-metallic')
metallicTexture.style.display = 'none';
metallicToggle.addEventListener('change', (event)=>{
  if(!metallicToggle.checked){
    metallicTexture.style.display = 'none';
  } else {
    metallicTexture.style.display = 'inline';
  }
})
