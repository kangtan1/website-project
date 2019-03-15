//create element for html
let mainDiv = document.createElement('div');
let divLeft = document.createElement('div');
let paraSize = document.createElement('p');
let divSmall = document.createElement('div');
let divMedium = document.createElement('div');
let divLarge = document.createElement('div');
let paraEtch = document.createElement('p');
let divColor = document.createElement('div');
let divFallback = document.createElement('div');
let divShader = document.createElement('div');
let divTrail = document.createElement('div');
let divClear = document.createElement('div');
let divRight = document.createElement('div');
let etchPanel = document.createElement('div');
let paraInfo = document.createElement('p');
let divWrapper = document.createElement('div');
let divGrid = document.createElement('div');
let nobs = document.createElement('div');
let rightNob = document.createElement('div');
let leftNob = document.createElement('div');

//append div into anchor element
let small = document.createElement('a');
let smallText = document.createTextNode('Small');
small.appendChild(smallText);
small.href = '#';
divSmall.appendChild(small);

let medium = document.createElement('a');
let mediumText = document.createTextNode('Medium');
medium.appendChild(mediumText);
medium.href = '#';
divMedium.appendChild(medium);

let large = document.createElement('a');
let largeText = document.createTextNode('Large');
large.appendChild(largeText);
large.href = '#';
divLarge.appendChild(large);

let color = document.createElement('a');
let colorText = document.createTextNode('color');
color.appendChild(colorText);
color.href = '#';
divColor.appendChild(color);

let fallBack = document.createElement('a');
let fallBackText = document.createTextNode('Default');
fallBack.appendChild(fallBackText);
fallBack.href = '#';
divFallback.appendChild(fallBack);

let shader = document.createElement('a');
let shaderText = document.createTextNode('Shader');
shader.appendChild(shaderText);
shader.href = '#';
divShader.appendChild(shader);

let trail = document.createElement('a');
let trailText = document.createTextNode('Trail');
trail.appendChild(trailText);
trail.href = '#';
divTrail.appendChild(trail);

let clear = document.createElement('a');
let clearText = document.createTextNode('Clear');
clear.appendChild(clearText);
clear.href = '#';
divClear.appendChild(clear);
// create text to para
let paraText = document.createTextNode('Pixel Size');
let paraOptions = document.createTextNode('Etch Options');

let paraGameInfo = document.createTextNode('Etch-A-Sketch - scottbot Edition');

//apprend text into para

paraSize.appendChild(paraText);
paraEtch.appendChild(paraOptions);
paraInfo.appendChild(paraGameInfo);

//append child option into left div
divLeft.appendChild(paraSize);
divLeft.appendChild(divSmall);
divLeft.appendChild(divMedium);
divLeft.appendChild(divLarge);
divLeft.appendChild(paraEtch);
divLeft.appendChild(divColor);
divLeft.appendChild(divFallback);
divLeft.appendChild(divClear);
divLeft.appendChild(divShader);
divLeft.appendChild(divTrail)

// append child game into right div
divRight.appendChild(etchPanel);
divWrapper.appendChild(divGrid);
etchPanel.appendChild(paraInfo);
etchPanel.appendChild(divWrapper);
etchPanel.appendChild(nobs);
etchPanel.appendChild(rightNob);
etchPanel.appendChild(leftNob);

//append child to the main div
let body = document.querySelector('body');
body.appendChild(mainDiv);
mainDiv.appendChild(divLeft);
mainDiv.appendChild(divRight);
// create id to to left div

mainDiv.setAttribute('id', 'wrapper');
divLeft.setAttribute('id', 'leftpanel');
divSmall.setAttribute('id', 'small');
divMedium.setAttribute('id', 'medium');
divLarge.setAttribute('id', 'large');
divColor.setAttribute('id', 'color');
divFallback.setAttribute('id', 'Default');
divShader.setAttribute('id', 'gradient');
divTrail.setAttribute('id', 'trail');
divClear.setAttribute('id', 'clear');

//set atribute to the right div

divRight.setAttribute('id', 'rightpanel');
etchPanel.setAttribute('id', 'etchmachine');
divWrapper.setAttribute('id', 'gridwrapper');
divGrid.setAttribute('id', 'grid');
nobs.setAttribute('id', 'nobs');
leftNob.setAttribute('id', 'leftnob');
rightNob.setAttribute('id', 'rightnob');

//create variable with an id
let wrapper = document.getElementById('wrapper');
let leftPanel = document.getElementById('leftpanel');

//create variable

let i = 0;
let container = document.getElementById('grid');
let num = 16;
let backColor = 'black';
const gridSmall = document.getElementById('small');
const gridMedium = document.getElementById('medium');
const gridLarge = document.getElementById('large');
const gridColor = document.getElementById('color');
const gridDefault = document.getElementById('Default');
const gridClear = document.getElementById('clear');
const gridShader = document.getElementById('gradient');
const gridTrail = document.getElementById('trail');

//create eventlistener to grid size
// gridsizeBtn('click', (e) => {
//     console.log('Size buttin event');
//     num = window.prompt('Enter desired of grid');
//     if (isNaN(num) || num == null || num == "" || num.trim() == "") {
//         alert('you did not enter a number. please enter number')
//     } else {
//         while (container.hasChildNodes())
//             container.removeChild(container.firstchild);
//         createBox(num);
//         if (backColor == 'black')
//             changeColor('black');
//         else
//             changeRandomColor();
//     }
// });

gridSmall.addEventListener('click', (e) => {
    console.log('Color button event');
    changeRandomColor();
});

//create boxes function
function createBox(num) {
    console.log('grid Size' + num);
    for (i = 0; i < num * num; i++) {
        const div = document.createElement('div');
        const height = 500 / num;
        div.style.height = `${height}px`;
        div.style.width = `${height}px`;
        div.style.display = 'inline-block';
        grid.appendChild(div);
    }
    //create function change color
    function changeColor() {
        backColor = 'blacks';
        let divs = document.querySelectorAll('.grid div');
        divs.forEach(div => div.addEventListener('mouseover', (e) => {
            console.log(e.currentTarget);
            e.currentTarget.style.background = color;
        }));
    }
    //create a dunction change random color

    function changeRandomColor() {
        backColor = 'blue';
        let divs = document.querySelectorAll('.grid div');
        divs.forEach(div => div.addEventListener('mouseover', (e) => {
            let randomColor = Math.floor(math.random() * 16777215).toString(16);
            e.currentTarget.style.background = `#${randomColor}`;
        }));
    }
    function darken() {
        let divs = document.querySelectorAll('.grid div');
        divs.forEach(div => div.addEventListener('mouseover', (e) => {
            e.currentTarget.style.opacity = (parseFloat(e.target.style.opacity) || 0) + .1;
        }));
    }
}
createBox(num);
// changeColor(backColor);