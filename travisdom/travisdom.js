
// create a variable to get dom from the html and create a id to the form

const form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');
//form submit event

form.addEventListener('submit', addItem);

// remove event
itemList.addEventListener('click', removeItem);

//flter event
filter.addEventListener('keyup', filterItems);
//add items
function addItem(e) {
    e.preventDefault();

    //get input value
    let newItem = document.getElementById('item').value;

    //create new li elemnt
    let li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //create new button element
    let deleteBtn = document.createElement('button');
    //create class for button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // append text node
    deleteBtn.append(document.createTextNode('X'));
    // append button to li
    li.appendChild(deleteBtn);


    //appent li to list
    itemList.appendChild(li);
}
// Remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}