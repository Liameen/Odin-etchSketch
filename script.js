
let numTag = 1;

const container = document.querySelector('.container');
const resetBtn = document.getElementById('resetBtn');
const inputBtn = document.querySelector('#inputBtn');

const containerTextDiv = document.querySelector('#containerTextDiv')

const plain = document.getElementById('Plain');
const shader = document.getElementById('Shader');
const rainbow = document.getElementById('Rainbow');

let input;
let input2;

let selectedColor = 'black';


//key listen and click listen

inputBtn.addEventListener("click", function(event) {
    container.innerHTML = '';
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





plain.onclick = function (){
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = '#333';
                
        })
    })    
}


shader.onclick = function (){
    pixels.forEach((pixel) => {
        pixel.count = 0;
        pixel.addEventListener('mouseover', (e) => {
            if(e.buttons == 1){
                e.target.style.backgroundColor = 'black';
                e.target.count += 1;
                e.target.style.opacity = 0.2 * e.target.count;
            }       
        })
    })    
}

// //function to draw with one shade
//         function plain(){
//             pixels.forEach((pixel) => {
//                 pixel.addEventListener('mouseover', (e) => {
//                         e.target.style.backgroundColor = '#333';
                        
//                 })
//             })    
//         }

// //function to allow button to draw with hold left click and shader
//         function shader(){
//             pixels.forEach((pixel) => {
//                 pixel.count = 0;
//                 pixel.addEventListener('mouseover', (e) => {
//                     if(e.buttons == 1){
//                         e.target.style.backgroundColor = 'black';
//                         e.target.count += 1;
//                         e.target.style.opacity = 0.2 * e.target.count;
//                     }       
//                 })
//             })    
//         }

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




