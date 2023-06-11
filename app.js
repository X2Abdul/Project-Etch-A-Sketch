//createing grid
const grid = document.querySelector("main");
const gridInput = document.querySelector('.createGridBtn');

let globalColor = 'red';

for(let i = 0; i < 256; i++){
    const gridBox = document.createElement('div');
    const gridNo = document.createElement('p');
    // gridNo.textContent =  i + 1;
    // gridBox.appendChild(gridNo);
    gridBox.classList.add('grid-box');
    grid.appendChild(gridBox);

    gridBox.addEventListener('mouseenter', () => {
        gridBox.style.backgroundColor = globalColor;
    });
    gridBox.addEventListener('mouseleave', () => {
        gridBox.style.backgroundColor = globalColor;
    });
}

//custom creating grid form user input

gridInput.addEventListener('click', function() {
    const input = document.querySelector('.input');
    let inputNo = parseInt(input.value);
    
    if (inputNo > 0 && inputNo <= 100) {
      const gridBoxes = document.querySelectorAll('.grid-box');
      gridBoxes.forEach(box => {
        box.parentNode.removeChild(box);
      });
      
      let gridWidth = inputNo * 25;
      grid.style.width = gridWidth + 'px';
      
      for (let i = 0; i < inputNo; i++) {
        for (let j = 0; j < inputNo; j++) {
          const gridBox = document.createElement('div');
          gridBox.classList.add('grid-box');
          grid.appendChild(gridBox);
      
          gridBox.addEventListener('mouseenter', () => {
            gridBox.style.backgroundColor = globalColor;
          });
          
          gridBox.addEventListener('mouseleave', () => {
            gridBox.style.backgroundColor = globalColor;
          });
        }
      }
    }
  });


//reset button
const button = document.querySelector('.resetBtn');

button.addEventListener('click', function() {
    const gridBoxes = document.querySelectorAll('.grid-box');
    gridBoxes.forEach(box => {
        box.style.backgroundColor = 'white';
    });
});

//setting colors to color divs

const colorBoxes = document.querySelectorAll('.color');
colorBoxes.forEach(color => {
    color.style.backgroundColor = color.id;

    color.addEventListener('click', function(){
        globalColor = color.id;
    });
});