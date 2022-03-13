const container = document.querySelector('.container');

const pixels = [
    createDivPixel('grid-item pixel1'),
    createDivPixel('grid-item pixel2'),
    createDivPixel('grid-item pixel3'),
    createDivPixel('grid-item pixel4'),
    createDivPixel('grid-item pixel5'),
    createDivPixel('grid-item pixel6'),
    createDivPixel('grid-item pixel7'),
    createDivPixel('grid-item pixel8'),
    createDivPixel('grid-item pixel9'),
    createDivPixel('grid-item pixel10'),
    createDivPixel('grid-item pixel11'),
    createDivPixel('grid-item pixel12'),
    createDivPixel('grid-item pixel13'),
    createDivPixel('grid-item pixel14'),
    createDivPixel('grid-item pixel15'),
    createDivPixel('grid-item pixel16')
];

// functions to create divs and append them and set id and classes
function createDivPixel(className){
    var div = document.createElement('div');
    div.setAttribute('class', className);
    //div.classList = ('pixelClass')

    return div;
}

function appendChildren(parent, arrChild){
    arrChild.forEach(child => {
        parent.appendChild(child);
    });

}




appendChildren(container, pixels);
console.log(container)













// const pixel1 = document.createElement('div');
// pixel1.style.color = 'red';

// const pixel2 = document.createElement('div');
// pixel2.style.color = 'blue';

// const pixel3 = document.createElement('div');
// pixel3.style.color = 'red';

// const pixel4 = document.createElement('div');
// pixel4.style.color = 'blue';

// const pixel5 = document.createElement('div');
// pixel5.style.color = 'red';

// const pixel6 = document.createElement('div');
// pixel6.style.color = 'blue';

// const pixel7 = document.createElement('div');
// pixel7.style.color = 'red';

// const pixel8 = document.createElement('div');
// pixel8.style.color = 'blue';

// const pixel9 = document.createElement('div');
// pixel9.style.color = 'red';

// const pixel10 = document.createElement('div');
// pixel10.style.color = 'blue';

// const pixel11 = document.createElement('div');
// pixel11.style.color = 'red';

// const pixel12 = document.createElement('div');
// pixel12.style.color = 'blue';

// const pixel13 = document.createElement('div');
// pixel13.style.color = 'red';

// const pixel14 = document.createElement('div');
// pixel14.style.color = 'blue';

// const pixel15 = document.createElement('div');
// pixel15.style.color = 'red';

// const pixel16 = document.createElement('div');
// pixel16.style.color = 'blue';


// document.createElement('div');


// container.appendChild(pixel1, pixel2, pixel3, pixel4, pixel5, pixel6, pixel7, pixel8, pixel9, pixel10, pixel11, pixel12, pixel13, pixel14, pixel15, pixel16)
// container.appendChild(pixel2)


