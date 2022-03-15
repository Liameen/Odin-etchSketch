
let numTag = 1;


const container = document.querySelector('.container');




// // functions to create divs and append them and set id and classes
// function createDivPixel(){
//     var div = document.createElement('div');
//     div.setAttribute('class', `grid-items item${numTag}`);
//     container.appendChild(div);
//     numTag++;
//     return div;
// }





function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.innerText = (c + 1);
      container.appendChild(cell).className = "grid-item";
    };
  };
  
  makeRows(12, 12);
  




// function pixelCreator(n){
//     for(let i = 0; i < n; i++){
//       createDivPixel();
      
//     }
// }

// pixelCreator(256);




