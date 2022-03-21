
let numTag = 1;

const container = document.querySelector('.container');
const resetBtn = document.getElementById('resetBtn');
const inputBtn = document.querySelector('#inputBtn');

const containerTextDiv = document.querySelector('#containerTextDiv')

let input;
let input2;

let selectedColor = 'black';


//key listen and click listen

inputBtn.addEventListener("click", function(event) {

    containerTextDiv.remove();
    input = prompt('Columns');
    input2 = prompt('Rows');
   

    
      getInputValue();
  });
  

// function to get input value
function getInputValue(){

   

    if(input <= 100 && input2 <= 100){
        createDivPixel(input, input2);
    }

    

    const pixels = document.querySelectorAll('.grid-item');


// selected tiles turn black and reset to default after clear

pixels.forEach((pixel) =>{
    pixel.style.backgroundColor = 'rgb(233, 233, 233)';
})


  pixels.forEach((pixel) => {
        pixel.addEventListener('click', (e) => {
            e.target.style.backgroundColor = '#333';
        })
    })    

// function to allow button to draw with left clicks
 pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', (e) => {
            if(e.buttons == 1){
                e.target.style.backgroundColor = '#333';
            }
            
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