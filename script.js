let numTag = 1;

const scrollHeight = document.body.scrollHeight;

const container = document.querySelector('.container');
const resetBtn = document.getElementById('resetBtn');
const inputBtnDiv = document.querySelector('#inputBtnDiv');
const inputBtn = document.querySelector('#inputBtn');

const containerTextDiv = document.querySelector('#containerTextDiv')

const plainDiv = document.getElementById('plainDiv');
const shaderDiv = document.getElementById('shaderDiv');
const rainbowDiv = document.getElementById('rainbowDiv');

const plain = document.getElementById('plain');
const shader = document.getElementById('shader');
const rainbow = document.getElementById('rainbow');

let input;
let input2;

let selectedColor = 'black';


//key listen and click listen

inputBtn.addEventListener("click", function(event) {
    container.innerHTML = '';
    window.scrollBy(0, scrollHeight)
    containerTextDiv.remove();
    
    input = prompt('Columns');
    input2 = prompt('Rows');
   

    
      getInputValue();
  });
  

// function to get input value and draw functions
function getInputValue(){

   

    if(input <= 100 && input2 <= 100){
        createDivPixel(input, input2);
    }

    

    const pixels = document.querySelectorAll('.grid-item');


// selected tiles turn black and reset to default after clear

pixels.forEach((pixel) =>{
    pixel.style.backgroundColor = 'rgb(233, 233, 233)';
})


//function for plain pen
    plain.onclick = function (){
        shaderDiv.remove();
        rainbowDiv.remove();
        inputBtnDiv.remove();
        pixels.forEach((pixel) => {
            pixel.addEventListener('mouseover', (e) => {
                if(e.buttons == 1){
                    e.target.style.backgroundColor = '#333';
                   
                }                  
            })
        })    
    }

//function for shader pen
    shader.onclick = function (){
        plainDiv.remove();
        rainbowDiv.remove();
        inputBtnDiv.remove();
        pixels.forEach((pixel) => {
            pixel.count = 0;
            pixel.addEventListener('mouseover', (e) => {
                if(e.buttons == 1){
                    e.target.style.backgroundColor = 'black';
                    e.target.count += 1;
                    e.target.style.opacity = 0.1 * e.target.count;
                }       
            })
        })    
    }

    //function rainbow pen
    rainbow.onclick = function (){
        plainDiv.remove();
        shaderDiv.remove();
        inputBtnDiv.remove();
        pixels.forEach((pixel) => {;
            pixel.addEventListener('mouseover', (e) => {
                if(e.buttons == 1){
                    const randomColor = Math.floor(Math.random()*16777215).toString(16);
                    e.target.style.backgroundColor = "#" + randomColor;
                   
                }       
            })          
        })    
    }


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




