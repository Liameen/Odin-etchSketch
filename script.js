
let numTag = 1;

const container = document.querySelector('.container');
const resetBtn = document.getElementById('resetBtn');
const inputBtn = document.querySelector('#inputBtn');



var input = document.getElementById("plyInput");
var input2 = document.getElementById("plyInput2");




// key listen and click listen

inputBtn.addEventListener("click", function(event) {
      getInputValue();
  });
  

// function to get input value
function getInputValue(){
    var inputValue = document.querySelector('#plyInput').value;
    var inputValue2 = document.querySelector('#plyInput2').value;

    if(inputValue <= 100 && inputValue2 <= 100){
        createDivPixel(inputValue, inputValue2);
    }

    

    const pixels = document.querySelectorAll('.grid-item');


// selected tiles turn black
    pixels.forEach((pixel) => {
        pixel.addEventListener('click', (e) => {
            e.target.style.backgroundColor = '#333';
        })
    })    
}



// functions to create divs and append them and set id and classes
function createDivPixel(cols, rows){

    container.style.setProperty('--grid-cols', cols);
    container.style.setProperty('--grid-rows', rows);
    
    for(let i = 0; i < (cols * rows); i++){
        var div = document.createElement('div');
    div.setAttribute('class', `grid-item item${numTag}`);
    container.appendChild(div);
    numTag++;
    }
}




 // refresh button to clear board
resetBtn.onclick = () => {
    window.location.reload();
}