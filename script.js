
let numTag = 1;

const container = document.querySelector('.container');
const resetBtn = document.getElementById('resetBtn');
const inputBtn = document.querySelector('#inputBtn');



var input = document.getElementById("plyInput");

// key listen and click listen
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("inputBtn").click( getInputValue());
  }
});




// function to get input value
function getInputValue(){
    var inputValue = document.querySelector('#plyInput').value;
    createDivPixel(inputValue, inputValue);

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

// createDivPixel(16, 16);




 // refresh button to clear board
resetBtn.onclick = () => {
    window.location.reload();
}