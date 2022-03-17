
let numTag = 1;

const container = document.querySelector('.container');







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

createDivPixel(6, 6);


let pixels = document.querySelectorAll('.grid-item');

console.log(pixels);



// pixels.addEventListener('click', (e) => {
//     e.target.style.backgroundColor = '#333';
// })

 pixels.forEach((pixel) => {
    pixel.addEventListener('click', (e) => {
        e.target.style.backgroundColor = '#333';
    })
 })


