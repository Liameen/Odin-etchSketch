
let numTag = 1;


const container = document.querySelector('.container');

let pixels = [
    
];


// console.log(pixels)

// functions to create divs and append them and set id and classes
function createDivPixel(){
    var div = document.createElement('div');
    div.setAttribute('class', `grid-item grid${numTag}`);
    container.appendChild(div);
    numTag++;
    return div;
}






  
;
console.log(container)



function pixelCreator(n){
    for(let i = 0; i < n; i++){
      createDivPixel();
      
    }
}

pixelCreator(4);

console.log(container)


