// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent = 'hello';
// console.log(document.forms);
// console.log(document.links);

// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);
// // headerTitle.textContent = 'hello';
// // headerTitle.innerText = 'goodbye';
// // console.log(headerTitle.innerText)
// // headerTitle.innerHTML = '<h3>Hello</h3>';
// // // headerTitle.style.borderBottom = 'solid 3px black';
// // // header.style.borderBottom = 'solid 3px red';
// let items = document.getElementsByClassName('list-group-item');
// // // console.log(items[1]);
// // console.log(items[1]);
// // // items[2].textContent = 'goodbye 3';
// // items[3].style.fontweight = 'bold';
// // items[1].textContent = 'hello 2';
// // items[1].style.fontweight = 'bold';
// // items[1].style.backgroundcolor = 'yellow';
// // items.style.backgroundColor = 'yellow';
// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'grey';
// }
// items[1].style.fontweight = 'bold';
// items[1].textContent = 'hello 2'
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].style.color = 'red';
// li[1].style.background = 'yellow';
// for (let i = 0; i < li.length; i++) {
//     li[i].style.background = 'blue';
//     li[i].style.color = 'white';
// }

// QUERYSELECTOR
// var header = document.querySelector('#main-header');

// header.style.borderBottom = 'solid 4px yellow';

// var input = document.querySelector('input');
// input.value = 'hello world';
// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'send';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'hello';

// var odd = document.

// var newDiv = document.createElement('div');

// // console.log(newDiv);
// newDiv.className = 'hello';
// newDiv.id = 'hello1';
// newDiv.setAttribute('title', 'hello div');
// var newDivText = document.createTextNode('Hello World');
// newDiv.append(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log('newDiv');

// container.insertBefore(newDiv, h1);

// newDiv.style.fontSize = '30px';
// newDiv.style.color = 'blue';

// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e) {
//     // console.log('Button Clicked')
//     // document.getElementById('header-title').textContent = 'changed';
//     // document.querySelector('#main').style.backgroundColor = 'red';
//     console.log(e.target);
// //     console.log(e.target.id);
// //     console.log(e.target.className);

// }



// var button2 = document.getElementById('button2').addEventListener('click', clickBack)

// function clickBack() {

//     document.getElementById('header-title').textContent = 'new changed';
//     document.querySelector('#main').style.backgroundColor = 'purple';
//     document.getElementById('main-header').style.backgroundColor = 'red';
// }
var button = document.getElementById('button').addEventListener('dclick', runEvent);
function runEvent(e) {
    console.log('event type: ' + e.type);
}



















